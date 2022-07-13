<template>
    <a-layout>
        <a-affix :offset-top="0">
            <a-layout-header>Header</a-layout-header>
        </a-affix>
        <a-layout-content>
            <router-view />
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const handleRouter = data => {
    router.push(data)
}
</script>

<style lang="scss">

</style>
