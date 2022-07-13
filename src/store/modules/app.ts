import { defineStore } from 'pinia'
import { store } from '@/store'
import { WEB_VERSION } from '@/config'

interface AppState {
    version: string;
    theme: string;
}

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        version: WEB_VERSION,
        theme: 'light'
    }),
    getters: {},
    actions: {
        toggleTheme(name: string) {
            this.theme = name
        }
    }
})

// 在组件setup函数外使用
export function useAppStoreWithOut() {
    return useAppStore(store)
}