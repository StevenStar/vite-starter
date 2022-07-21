import { createApp } from 'vue'
import App from '@/App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupAntd, setupVueQrcode } from '@/plugins'

import '@/assets/css/main.scss'

const app = createApp(App)

function setupPlugins() {
    // setupAntd(app)
}

async function setupApp() {
    setupStore(app)
    await setupRouter(app)
    await setupVueQrcode(app)
    
    app.mount('#app')
}

setupPlugins()

setupApp()
