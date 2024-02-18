import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
    if (getToken()) {
        //有token，访问login调到首页
        if (to.path === '/login') {
            next({ path: '/' });
            NProgress.done();
        } else {
            next()
        }

    } else {
        // 用户未登录，需要重定向到登录页面
        if (whiteList.includes(to.path)) {
            // 如果用户访问的是登录页面或者白名单中的其他页面，则放行
            next();
        } else {
            console.log("44444444444444444444444")
            // 如果用户访问的不是登录页面且未登录，则重定向到登录页面
            next("/login");
            NProgress.done();
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})
