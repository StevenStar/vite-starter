import { scope } from '../../../node_modules/css-tree/lib/syntax/config/parser';
<template>
    <div class="app-header-top">
        <div class="app-container">
            <div class="top-left">
                <a-menu class="top-nav" :selectable="false" mode="horizontal">
                    <a-menu-item class="top-nav-item" key="1">官网</a-menu-item>
                    <a-menu-item class="top-nav-item" key="2">商城</a-menu-item>
                    <a-menu-item class="top-nav-item" key="3">论坛</a-menu-item>
                </a-menu>
            </div>
            <div class="top-right">
                <a-menu class="top-nav" :selectable="false" mode="horizontal">
                    <a-menu-item class="top-nav-item" key="1">消息</a-menu-item>
                    <a-menu-item class="top-nav-item" key="2">注册</a-menu-item>
                    <a-sub-menu key="sub1">
                        <template #title>
                            <span>
                                <user-outlined :style="{fontSize: '12px'}" />
                                用户
                            </span>
                        </template>
                        <a-menu-item class="top-nav-item" key="11">个人中心</a-menu-item>
                        <a-menu-item class="top-nav-item" key="21">退出登录</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {
    UserOutlined
} from '@ant-design/icons-vue'
</script>
<style lang="scss" scoped>
.app-header-top {
    height: 26px;
    line-height: 26px;
    
    .app-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        :deep(.ant-menu) {
            &.top-nav {
                line-height: 26px;
                border: 0;
                background-color: transparent;

                .ant-menu-item {
                    padding: 0 10px;
                    
                    .ant-menu-title-content {
                        font-size: 12px;
                    }

                    &::after {
                        display: none;
                    }
                }

                .ant-menu-submenu {
                    padding: 0 10px;

                    .ant-menu-title-content {
                        font-size: 12px;
                    }
                    
                    &::after {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>