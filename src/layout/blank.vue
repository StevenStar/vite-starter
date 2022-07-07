<template>
    <div>
        <router-link to="/">Home</router-link> 
        <router-link to="/product/1">Product 1</router-link> 
        <router-link to="/product/2">Product 2</router-link> 
        <router-link to="/about">About</router-link> <br>
        <button @click="handleRouter('/')">Go To Home Page</button>
        <button @click="handleRouter('/about')">Go To About Page</button>
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()

const handleRouter = data => {
    router.push(data)
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
