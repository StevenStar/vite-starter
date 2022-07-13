<template>
    <div class="signin-page">
        <div class="signin-body">
            <div class="login-logo">
                <img src="~@/assets/img/logo.png" width="45" />
                <h1 class="mb-0 ml-2 text-3xl font-bold">StarYee ERP</h1>
            </div>
            <a-form class="auth-form" layout="horizontal" :model="state.formInline" @submit.prevent="handleSubmit">
                <a-form-item>
                    <a-input v-model:value="state.formInline.username" placeholder="rootadmin">
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-model:value="state.formInline.password" type="password" placeholder="123456" autocomplete="new-password">
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-model:value="state.formInline.verifyCode" placeholder="验证码" :maxlength="4">
                        <template #suffix>
                            <img :src="state.captcha" class="absolute right-0 h-full cursor-pointer" @click="setCaptcha"/>
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" :loading="state.loading" block>
                        登录
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const state = reactive({
    loading: false,
    captcha: '',
    formInline: {
        username: '',
        password: '',
        verifyCode: '',
        captchaId: '',
    }
})

const setCaptcha = async () => {
}

const handleRouter = data => {
    router.push(data)
}

const handleSubmit = () => {

}

onMounted(() => {

})
</script>
<style lang="scss" scoped>
.signin-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-size: 100%;

    .signin-body {
        display: flex;
        flex-direction: column;
        width: 80%;
        max-width: 300px;

        .login-logo, .auth-form {
            
        }
    }
}
</style>