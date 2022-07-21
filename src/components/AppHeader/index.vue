<template>
    <div class="app-header">
        <div class="app-container">
            <div class="header-logo">
                <img src="@/assets/img/logo.png" alt="" class="img-logo">
            </div>
            <div class="header-content">
                <a-menu class="header-nav" v-model="current" mode="horizontal">
                    <a-menu-item key="home">
                        <template #icon>
                            <appstore-outlined />
                        </template>
                        精选
                    </a-menu-item>
                    <a-menu-item key="words">
                        <template #icon>
                            <appstore-outlined />
                        </template>
                        话题
                    </a-menu-item>
                    <a-menu-item key="question">
                        <template #icon>
                            <appstore-outlined />
                        </template>
                        问答
                    </a-menu-item>
                    <a-menu-item key="plate">
                        <template #icon>
                            <appstore-outlined />
                        </template>
                        专栏
                    </a-menu-item>
                    <a-menu-item key="news">
                        <template #icon>
                            <appstore-outlined />
                        </template>
                        资讯
                    </a-menu-item>
                    <a-menu-item key="notice">
                        <template #icon>
                            <appstore-outlined />
                        </template>
                        公告
                    </a-menu-item>
                    <a-sub-menu key="sub1">
                        <template #icon>
                            <setting-outlined />
                        </template>
                        <template #title>更多</template>
                        <a-menu-item key="setting:1">资讯</a-menu-item>
                        <a-menu-item key="setting:2">资源</a-menu-item>
                        <a-menu-item key="setting:3">书籍</a-menu-item>
                        <a-menu-item key="setting:4">课程</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {
    AppstoreOutlined,
    SettingOutlined
} from '@ant-design/icons-vue'

let current = 'home'
</script>
<style lang="scss" scoped>
.app-header {
    .app-container {
        display: flex;
        justify-content: flex-start;
        
        .header-logo {
            width: 38px;

            .img-logo {
                width: 38px;
                height: 38px;
            }
        }

        .header-content {
            margin-left: 20px;
            flex: 1;
        }
    }

}
</style>