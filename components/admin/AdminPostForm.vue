<template>
    <form @submit.prevent="onSave">
        <AppInput v-model="newPost.start">Starttime</AppInput>
        <AppInput v-model="newPost.end">Endtime</AppInput>
        <div class="check-container">
            <AppCheck :id="'breakOne'" v-model="newPost.breakOne" :minutes="15">15 minutes</AppCheck>
            <AppCheck :id="'breakTwo'" v-model="newPost.breakTwo" :minutes="30">30 minutes</AppCheck>
            <AppCheck :id="'breakThree'" v-model="newPost.breakThree" :minutes="15">15 minutes</AppCheck>
        </div>
        <AppButton>Save</AppButton>
    </form>
</template>

<script>
import AppInput from '@/components/UI/AppInput'
import AppButton from '@/components/UI/AppButton'
import AppCheck from '@/components/UI/AppCheck'

export default {
    data() {
        return {
            newPost: this.post ? { ...this.post } : { 
                start: '',
                end: '',
                breakOne: 0,
                breakTwo: 0,
                breakThree: 0,
                date: new Date().toDateString(),
                time: new Date().toTimeString().substring(0, 5)
            }
        }
    },
    methods: {
        onSave() {
            this.$emit('submit', this.newPost);
        },
        onCancel() {
            this.$router.push('/admin')
        }
    },
    components: {
        AppInput,
        AppButton,
        AppCheck

    },
    props: {
        post: {
            type: Object,
            required: false
        }
    }
}
</script>

<style scoped>
.check-container {
    margin-bottom: 20px;
}
</style>