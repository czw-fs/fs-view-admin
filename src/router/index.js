import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../layout/main.vue'
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    children:[
      {
        path:'/',
        name: "首页",
        component: () => import('@/views/index.vue'),
      },
      {
        path:'index1',
        name: "首页",
        component: () => import('@/views/index1.vue'),
      },      
      {
        path:'index2',
        name: "首页",
        component: () => import('@/views/index2.vue'),
      },
    ]
  }
]


// 防止连续点击多次路由报错
let routerPush = Router.prototype.push;
let routerReplace = Router.prototype.replace;
// push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}
// replace
Router.prototype.replace = function push(location) {
  return routerReplace.call(this, location).catch(err => err)
}

export const testRouter = [
  {
    path: '/test',
    component: () => import('@/views/login.vue'),
    hidden: true
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})