<template>
    <form @submit.prevent="onSave">
        <AppInput v-model="newPost.start">Starttime</AppInput>
        <AppInput v-model="newPost.end">Endtime</AppInput>
        <AppButton>Save</AppButton>
    </form>
</template>

<script>
import AppInput from '@/components/UI/AppInput'
import AppButton from '@/components/UI/AppButton'

export default {
    data() {
        return {
            newPost: this.post ? { ...this.post } : { 
                start: '',
                end: ''
            }
        }
    },
    methods: {
        onSave() {
            // Save the post
            console.log(this.newPost)
        },
        onCancel() {
            // Navigate back
            this.$router.push('/admin')
        }
    },
    components: {
        AppInput,
        AppButton
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    }
}
</script>