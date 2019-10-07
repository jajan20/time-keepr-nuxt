<template>
    <section class="post-list">
        <PostPreview v-for="post in posts" :key="post.id"
        :id="post.id" 
        :date="post.date"
        :time="post.time.substring(0, 5)"
        :workedHours="post.workedHours"
        :workedMinutes="post.workedMinutes" />
    </section>
</template>

<script>
import PostPreview from '../../components/posts/PostPreview'

export default {
    components: {
        PostPreview
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>