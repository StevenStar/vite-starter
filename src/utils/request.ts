import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { useAuthStore } from '@/store/modules/auth'
import { message } from 'ant-design-vue'
import { getToken } from '@/utils/auth'
import { API_SERVER } from '@/config'

const authStore: any = useAuthStore()

const service: AxiosInstance = axios.create({
    baseURL: API_SERVER,
    timeout: 10000
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
    const token: any = getToken()
    if (token) {
        config.headers['token'] = token
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
        authStore.signOut()
    } else {
        message.error(error.msg || error.message || '服务异常，请稍后再试！')
    }
}

export default service