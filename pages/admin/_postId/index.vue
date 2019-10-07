<template>
    <div class="admin-post-page">
        <section class="update-form">
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