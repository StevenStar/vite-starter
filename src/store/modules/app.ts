import { defineStore } from 'pinia'
import config from '@/config'
const { WEB_VERSION } = config

export interface AppState {
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