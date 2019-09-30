<template>
    <section>
        <nuxt-link class="nuxt-link" :to="'/posts'">Return</nuxt-link>
        <article class="single-post">
            <p>01-01-2019</p>
            <p><strong>Start time: </strong>09:00</p>
            <p><strong>End time: </strong>19:20</p>
            <p><strong>Lunch time: </strong>01:00h</p>
            <p><strong>Clocked: </strong>Yes</p>
            <p><strong>Total: </strong>Worked 9 hours and 20 minutes.</p>
        </article>
    </section>
</template>

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