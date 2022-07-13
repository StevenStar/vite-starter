import { defineStore } from 'pinia'
import { store } from '@/store'

interface AuthState {
    token: string
    userInfo: UserInfo
}

interface UserInfo {
    id: number|string
    name?: string
    avatar?: string
}

const defaultUserInfo = {
    id: '',
    name: '',
    avatar: ''
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): AuthState => ({
        token: '',
        userInfo: {...defaultUserInfo}
    }),
    getters: {},
    actions: {
        setUserInfo(userinfo: UserInfo) {
            this.userInfo = userinfo
        },
        signIn() {},
        signOut() {
            this.userInfo = defaultUserInfo
        }
    }
})

// 在组件setup函数外使用
export function useAuthStoreWithOut() {
    return useAuthStore(store)
}