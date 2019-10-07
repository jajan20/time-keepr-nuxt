<template>
    <section>
        <nuxt-link class="nuxt-link" :to="'/posts'">Return</nuxt-link>
        <article>
            <p class="date-string">{{ loadedPost.date }} <span class="post-time">{{loadedPost.time}}</span></p>
            <p>On this day you started your workday at: <strong>{{loadedPost.start}}</strong></p>
            <p>You checked out at: <strong>{{loadedPost.end}}</strong></p>
            <p>You had a total break of: <strong>{{ loadedPost.breakOne + loadedPost.breakTwo + loadedPost.breakThree}} minutes</strong></p>
            <p>Which means you've worked a total of <strong>{{loadedPost.workedHours}} hours</strong> and <strong>{{loadedPost.workedMinutes}} minutes</strong></p>
        </article>
    </section>
</template>

<script>
import axios from 'axios'
import SinglePost from '@/components/posts/SinglePost'

export default {
    asyncData(context){
    return axios.get('https://time-keepr.firebaseio.com/posts/' + context.params.id + '.json')
        .then(res => {
            console.log(res.data)
            return {
                loadedPost: res.data
            }
        })
        .catch(err => context.error(err))
    }
}
</script>

<style scoped>
section {
    padding: 10px;
}

.single-post {
    margin-top: 20px;
    border: solid 1px black;
    padding: 10px;
}

.date-string {
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post-time {
    font-size: 12px;
}

article {
    margin-top: 20px;
}

article p {
    margin-bottom: 10px;
}
</style>