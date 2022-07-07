import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import { BlankLayout } from '@/layout'

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
            title: 'Vite + Vue + TypeScript + SCSS'
        }
    }]
// }, {
//     path: '/:pathMatch(.*)*',
//     name: 'not-found',
//     component: BlankLayout,
//     children: [{
//         path: '/:pathMatch(.*)*',
//         name: 'not-found-page',
//         component:  () => import('@/pages/Error/not-found.vue'),
//         meta: {
//             title: 'Vite + Vue + TypeScript + SCSS'
//         }
//     }]
}]

export default createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createWebHashHistory(),
    routes
})