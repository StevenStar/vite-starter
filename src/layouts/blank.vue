<template>
    <a-layout class="app-layout">
        <AppHeaderTop />
        <a-affix :offset-top="0">
            <a-layout-header class="app-layout-header">
                <AppHeader />
            </a-layout-header>
        </a-affix>
        <a-layout-content class="app-layout-content">
            <router-view />
        </a-layout-content>
        <a-layout-footer class="app-layout-footer">
            <AppFooter />
        </a-layout-footer>
    </a-layout>
</template>
<style lang="scss">
    .app-layout {
        .app-layout-header {
            height: 80px;
            line-height: 80px;
            background-color: #fff;
        }
        
        .app-layout-content {
            min-height: calc(100vh - 80px - 380px);
        }

        .app-layout-footer {
            margin-top: 20px;
            padding: 20px 0 0 0;
            width: 100%;
            background-color: #fff;
        }
    }
</style>
