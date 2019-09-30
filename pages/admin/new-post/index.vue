<template>
    <div class="new-post-page">
        <nuxt-link class="nuxt-link" :to="'/'">Return</nuxt-link>
        <section class="post-form">
            <AdminPostForm/>
        </section>
    </div>
</template>


<script>
import AdminPostForm from '@/components/admin/AdminPostForm'

export default {
    components: {
        AdminPostForm
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