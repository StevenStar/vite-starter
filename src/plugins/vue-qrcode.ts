import type { App } from 'vue'
import VueQrcode from 'qrcode.vue'

export function setupVueQrcode(app: App<Element>) {
    app.component('qrcode-vue', VueQrcode)
}