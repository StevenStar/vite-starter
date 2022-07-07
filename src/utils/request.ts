import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import store from '@/store'
import config from '@/config'
const API_SERVER = config.API_SERVER

const service: AxiosInstance = axios.create({
    baseURL: API_SERVER,
    timeout: 5000
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
    if (store.getters['/auth/token']) {
        config.headers['token'] = store.state.auth.token
    }
    
    return config
}, (error: AxiosError) => {
    console.log(error)
    return Promise.reject(error)
})

service.interceptors.response.use((response: AxiosResponse) => {
    const res = response.data
    if (res.code === 200) {
        return res
    } else {
        showError(res)
        return Promise.reject(res)
    }
}, (error: AxiosError) => {
    console.log(error)
    const msg: any = error.message || error
    const code = parseInt(msg.toString().replace('Error: Request failed with status code ', ''))
    showError({ code, message: msg })
    return Promise.reject(error)
})

function showError(error: any) {
    if (error.code === 403) {
        store.dispatch('auth/signOut')
    } else {
        // totast({
        //     message: error.msg || error.message || '服务异常，请稍后再试！',
        //     type: 'error',
        //     duration: 3 * 1000
        // })
    }
}

export default service