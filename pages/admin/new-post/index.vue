<template>
    <div class="new-post-page">
        <nuxt-link class="nuxt-link" :to="'/'">Return</nuxt-link>
        <section class="post-form">
            <AdminPostForm @submit="onSubmitted"/>
        </section>
    </div>
</template>


<script>
import AdminPostForm from '@/components/admin/AdminPostForm'
import axios from 'axios'

export default {
    components: {
        AdminPostForm
    },
    methods: {
        onSubmitted(postData) {
            axios.post('https://time-keepr.firebaseio.com/posts.json', postData)
            .then(result => console.log(result))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
.new-post-page {
    padding: 10px;
}

.post-form {
    margin-top: 20px;
}
</style>