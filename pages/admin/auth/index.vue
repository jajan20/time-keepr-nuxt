<template>
    <div class="auth-page">
        <div class="auth-container">
            <form>
                <AppInput type="email">Email</AppInput>
                <AppInput type="email">Password</AppInput>
                <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
            </form>
        </div>
    </div>
</template>

<script>
import AppInput from '@/components/UI/AppInput'
import AppButton from '@/components/UI/AppButton'

export default {
    name: 'AuthPage',
    data() {
        return {
            isLogin: true
        }
    },
    components: {
        AppInput,
        AppButton
    }
}
</script>

<style scoped>
.auth-page {
    padding: 10px;
}
</style>