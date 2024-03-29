import axios from 'axios'
import { Message } from 'element-ui'
import { tansParams } from "@/utils/ruoyi";
import cache from './catch.js'
import store from '@/store'
import { getToken } from '@/utils/auth'
import Vue from 'vue'


const errorCode = {
  '401': '认证失败，无法访问系统资源',
  '403': '当前操作没有权限',
  '404': '访问资源不存在',
  'default': '系统未知错误，请反馈给管理员'
}

// 是否显示重新登录
export let isRelogin = { show: false };

//设置默认传输类型为json
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 没有超时限制
  timeout: 0
})

// request拦截器
service.interceptors.request.use(config => {

  config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改


  // 是否需要防止数据重复提交
  const isRepeatSubmit = (config.headers || {}).repeatSubmit === false

  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?' + tansParams(config.params);
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }

  if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
    const requestObj = {
      url: config.url,
      data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
      time: new Date().getTime()
    }

    const sessionObj = cache.session.getJSON('sessionObj')
    if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
      cache.session.setJSON('sessionObj', requestObj)
    } else {
      const s_url = sessionObj.url;                  // 请求地址
      const s_data = sessionObj.data;                // 请求数据
      const s_time = sessionObj.time;                // 请求时间
      const interval = 1000;                         // 间隔时间(ms)，小于此时间视为重复提交
      if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
        const message = '数据正在处理，请勿重复提交';
        console.warn(`[${s_url}]: ` + message)
        return Promise.reject(new Error(message))
      } else {
        cache.session.setJSON('sessionObj', requestObj)
      }
    }
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  // console.log(res.data.msg)
  // console.log(res.data.code)
  // console.log(res.data)
  // console.log(res)

  // 未设置状态码则默认成功状态
  const code = res.data.code;
 
  //登录过期
  if (code == 401){
    Vue.prototype.$message({ message: res.data.msg, type: 'error',duration: 5 * 1000})
    store.dispatch('LogOut').then(() => {
      location.href = '/';
    })
  }
  else if(code != 200){
    Vue.prototype.$message({ message: res.data.msg, type: 'error',duration: 5 * 1000})
  }else{
    return res.data;
  }

},
 error => {
  // 捕获后端返回的错误信息并显示在页面上
  console.log('err' + error)
  Vue.prototype.$message({ message: error, type: 'error', duration: 5 * 1000 })
  return 1;
});


export default service
