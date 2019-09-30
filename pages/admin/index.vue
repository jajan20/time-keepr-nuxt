<template>
    <div class="admin-page">
        <section class="new-post">
            <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
        </section>
    </div>
</template>

<script>
import AppButton from '@/components/UI/AppButton'

export default {
    components: {
        AppButton
    }
}

</script>