import { createRouter, createWebHashHistory } from 'vue-router'
import { BlankLayout, DefaultLayout } from '@/layouts'
import { createRouterGuards } from '@/router/router-guards'
import { WHITE_NAME_LIST } from '@/config/constant'

import type { App } from 'vue'

const routes = [{
    path: '/',
    name: 'root',
    redirect: '/',
    component: BlankLayout,
    children: [{
        path: '',
        name: 'home',
        component: () => import('@/pages/Home/index.vue'),
        meta: {
            auth: false,
            title: 'Vite + Vue + TypeScript + SCSS'
        }
    }]
}, {
    path: '/about',
    name: 'about',
    redirect: '/about',
    component: BlankLayout,
    children: [{
        path: '',
        name: 'about',
        component:  () => import('@/pages/About/index.vue'),
        meta: {
            auth: false,
            title: 'Vite + Vue + TypeScript + SCSS'
        }
    }]
}, {
    path: '/auth',
    name: 'auth',
    redirect: '/auth/signin',
    component: DefaultLayout,
    children: [{
        path: 'signin',
        name: 'signin',
        component:  () => import('@/pages/Auth/signin.vue'),
        meta: {
            auth: false,
            title: 'Vite + Vue + TypeScript + SCSS'
        }
    }]
}, {
    path: '/user',
    name: 'user',
    redirect: '/user',
    component: BlankLayout,
    children: [{
        path: '',
        name: 'user-center',
        component:  () => import('@/pages/User/index.vue'),
        meta: {
            auth: true,
            title: 'Vite + Vue + TypeScript + SCSS'
        }
    }]
}, {
    path: '/product',
    name: 'product',
    component: BlankLayout,
    children: [{
        path: ':id',
        name: 'product-detail',
        component:  () => import('@/pages/Product/_.vue'),
        meta: {
            auth: false,
            title: 'Vite + Vue + TypeScript + SCSS'
        }
    }]
}, {
    path: '/error',
    name: 'error',
    component: BlankLayout,
    children: [{
        path: '404',
        name: 'error',
        component:  () => import('@/pages/Error/404.vue'),
        meta: {
            auth: false,
            title: 'Vite + Vue + TypeScript + SCSS'
        }
    }]
}, {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/error/404'
}]

export const router = createRouter({
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createWebHashHistory(),
    routes
})

export function resetRouter() {
    router.getRoutes().forEach(route => {
        const { name } = route
        if (name && !WHITE_NAME_LIST.includes(name as string)) {
            router.hasRoute(name) && router.removeRoute(name)
        }
    })
}

export async function setupRouter(app: App) {
    // 创建路由守卫
    createRouterGuards(router)
    
    app.use(router)
}

export default router