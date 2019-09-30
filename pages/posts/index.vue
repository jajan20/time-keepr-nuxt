<template>
    <section class="post-page">
        <nuxt-link class="nuxt-link" :to="'/'">Return</nuxt-link>
        <PostPreview id="1" date="01-01-2019" workedHours="09:20h"/>
        <PostPreview id="2" date="05-01-2019" workedHours="08:15h"/>
        <PostPreview id="3" date="09-01-2019" workedHours="03:30h"/>
    </section>
</template>

<script>
import PostPreview from '../../components/posts/PostPreview'

export default {
    components: {
        PostPreview
    }
}
</script>

<style scoped>
.post-page {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
}

.nuxt-link {
    margin-bottom: 20px;
}

a { 
    width: 100%;
}
</style>