<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/admin/AdminPostForm'

export default {
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                startTime: '09:00',
                endTime: '18:00'
            }
        }
    }
}
</script>