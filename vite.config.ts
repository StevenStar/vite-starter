import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { viteMockServe } from 'vite-plugin-mock'
import svgLoader from 'vite-svg-loader';
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        viteMockServe({
            mockPath: './mock',
            localEnabled: process.env.USE_MOCK || false,
            prodEnabled: process.env.USE_CHUNK_MOCK || false,
            logger: true
        }),
        svgLoader(),
        AutoImport({
            resolvers: [AntDesignVueResolver()]
        }),
        Components({
            resolvers: [AntDesignVueResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        open: false
    }
})
