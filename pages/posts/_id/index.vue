<template>
    <section>
        <nuxt-link class="nuxt-link" :to="'/posts'">Return</nuxt-link>
        <article class="single-post">
            <h1>{{ loadedPost.title }}</h1>
            <p>{{ loadedPost.date }}</p>
            <p><strong>Start time: </strong>{{ loadedPost.start }}</p>
            <p><strong>End time: </strong>{{ loadedPost.end }}</p>
            <p><strong>Lunch time: </strong>{{ loadedPost.lunch }}</p>
            <p><strong>Clocked: </strong>{{ loadedPost.clocked }}</p>
            <p><strong>Total: </strong>{{ loadedPost.totalHours }}</p>
        </article>
    </section>
</template>

<script>
export default {
    asyncData(context) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    loadedPost:{ 
                        id: '1', 
                        title: 'ID: ('+ context.params.id +')',
                        start: '09:00',
                        end: '18:00',
                        lunch: '01:00h',
                        clocked: true,
                        date: '01-02-2019', 
                        totalHours: '9h 20m'
                    }
                })
            }, 1000)
        })
        .then(data => {
            return data 
        })
        .catch(err => {
            context.error(new Error())
        })
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
</style>