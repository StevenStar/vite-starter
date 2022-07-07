import { defineStore } from 'pinia'

export interface AuthState {
    token: string
    userInfo: UserInfo
}

export interface UserInfo {
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