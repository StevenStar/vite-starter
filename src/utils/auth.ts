import cookies from 'js-cookie'
import { WEB_TOKEN_KEY } from '@/config'

export function getToken() {
    return cookies.get(WEB_TOKEN_KEY)
}

export function setToken(token: any) {
    return cookies.set(WEB_TOKEN_KEY, token)
}

export function removeToken() {
    return cookies.remove(WEB_TOKEN_KEY)
}
