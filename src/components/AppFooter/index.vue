<template>
    <div class="app-footer">
        <div class="app-container">
            <div class="footer-slogan">
                <a-row :gutter="16">
                    <a-col :span="8">
                        <div class="slogan-wrap">
                            &nbsp;
                        </div>
                    </a-col>
                    <a-col :span="8">
                        <div class="slogan-wrap">
                            &nbsp;
                        </div>
                    </a-col>
                    <a-col :span="8">
                        <div class="slogan-wrap">
                            &nbsp;
                        </div>
                    </a-col>
                </a-row>
            </div>
            <div class="footer-links">
                <div class="link-list-group">
                    <div class="link-list">
                        <div class="link-head">关于我们</div>
                        <div class="link-body">
                            <a-menu class="link-nav" :selectable="false" mode="vertical">
                                <a-menu-item class="nav-item" key="1">了解我们</a-menu-item>
                                <a-menu-item class="nav-item" key="2">加入我们</a-menu-item>
                            </a-menu>
                        </div>
                    </div>
                    <div class="link-list">
                        <div class="link-head">服务</div>
                        <div class="link-body">
                            <a-menu class="link-nav" :selectable="false" mode="vertical">
                                <a-menu-item class="nav-item" key="1">法律法规</a-menu-item>
                            </a-menu>
                        </div>
                    </div>
                    <div class="link-list">
                        <div class="link-head">关于我们</div>
                        <div class="link-body">
                            <a-menu class="link-nav" :selectable="false" mode="vertical">
                                <a-menu-item class="nav-item" key="1">我们的团队</a-menu-item>
                                <a-menu-item class="nav-item" key="2">我们的优势</a-menu-item>
                                <a-menu-item class="nav-item" key="3">公司简介</a-menu-item>
                                <a-menu-item class="nav-item" key="4">联系我们</a-menu-item>
                            </a-menu>
                        </div>
                    </div>
                    <div class="link-list">
                        <div class="link-head">合作伙伴</div>
                        <div class="link-body">
                            <a-menu class="link-nav" :selectable="false" mode="vertical">
                                <a-menu-item class="nav-item" key="1">Vite</a-menu-item>
                                <a-menu-item class="nav-item" key="2">Vue</a-menu-item>
                                <a-menu-item class="nav-item" key="3">Typescript</a-menu-item>
                            </a-menu>
                        </div>
                    </div>
                </div>
                <div class="footer-app">
                    <div class="app-head">APP 下载</div>
                    <div class="app-qrcode">
                        <qrcode-vue value="Fuck You!" :size="100"></qrcode-vue>
                    </div>
                    <div class="app-foot">iOS & Android</div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-text">本站由 星耶科技 提供计算与安全服务 违法和不良信息、未成年人保护举报邮箱：<a href="mailto:stevenstar@126.com">stevenstar@126.com</a></div>
                <div class="footer-text">© 2011~{{ new Date().getFullYear() }} 星耶科技</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

interface SloganItem {
    title: string
}

interface State {
    sloganList: SloganItem[]
}

const state: State = reactive({
    sloganList: [
        { title: '公平' },
        { title: '公正' },
        { title: '公开' },
        { title: '效率' }
    ]
})

</script>
<style lang="scss" scoped>
.app-footer {
    .app-container {
        .footer-slogan {
            .slogan-wrap {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60px;
                font-size: 20px;
                font-weight: bolder;
            }
        }

        .footer-links {
            margin-top: 20px;
            display: flex;
            justify-content: flex-start;
            height: 160px;
            
            .link-list-group {
                flex: 1;
                display: flex;
                justify-content: space-between;

                .link-list {
                    .link-head {
                        font-size: 14px;
                        font-weight: bold;
                    }

                    .link-body {
                        margin-top: 10px;

                        :deep .link-nav {
                            border-right: 0;
                            
                            .nav-item {
                                padding: 0;
                                height: auto;
                                font-size: 13px;
                                line-height: 1.56;
                                color: #757575;
                            }
                        }
                    }
                }
            }

            .footer-app {
                margin-left: 200px;
                width: 120px;
                
                .app-head {
                    font-size: 13px;
                    text-align: center;
                }

                .app-qrcode {
                    margin-top: 10px;
                    text-align: center;
                    
                    .img-qrcode {
                        width: 100px;
                        height: 100px;
                    }
                }

                .app-foot {
                    margin-top: 8px;
                    font-size: 12px;
                    color: #b0b0b0;
                    text-align: center;
                }
            }
        }

        .footer-bottom {
            margin-top: 20px;
            padding-top: 20px;
            height: 80px;
            text-align: center;
            border-top: 1px solid #efefef;
            
            .footer-text {
                font-size: 12px;
                color: #b0b0b0;
            }
        }
    }
}
</style>