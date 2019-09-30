<template>
    <section class="post-page">
      <PostPreview id="1" date="01-01-2019" workedHours="09:20h"/>
      <PostPreview id="2" date="05-01-2019" workedHours="08:15h"/>
      <PostPreview id="3" date="09-01-2019" workedHours="03:30h"/>
      <nuxt-link :to="'/'">Return</nuxt-link>
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
}
</style>