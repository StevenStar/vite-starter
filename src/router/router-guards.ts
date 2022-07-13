import NProgress from 'nprogress'
import { getToken } from '@/utils/auth'
import { WHITE_NAME_LIST } from '@/config/constant'

import type { Router } from "vue-router";

NProgress.configure({
    showSpinner: false
})

export function createRouterGuards(router: Router) {
    router.beforeEach(async (to, from, next) => {
        NProgress.start()
        const token = getToken()
        
        if (token) {
            if (to.name === 'signin') {
                next('/')
            } else {
                next()
            }
        } else {
            // 未登录直接进入
            if (!to.meta.auth || WHITE_NAME_LIST.some(n => n === to.name)) {
                next()
            } else {
                next ({ name: 'signin', query: { redirect: to.fullPath}, replace: true })
            }
        }
    })

    router.afterEach((to, from, next) => {
        NProgress.done()
    })

    router.onError(error => {
        console.log(error, '路由错误')
    })
}