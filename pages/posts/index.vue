<template>
    <section class="post-page">
        <nuxt-link class="nuxt-link" :to="'/'">Return</nuxt-link>
        <PostList :posts="loadedPosts"/>
    </section>
</template>

<script>
import PostList from '@/components/posts/PostList'

export default {
    components: {
        PostList
    },
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts
        }
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