import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
    if (localStorage.getItem("token") == "123") {

        if (to.path === '/login') {
            next({ path: '/test' });
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
            // 如果用户访问的不是登录页面且未登录，则重定向到登录页面
            next(`/login?redirect=${encodeURIComponent(to.fullPath)}`);
            NProgress.done();
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})
