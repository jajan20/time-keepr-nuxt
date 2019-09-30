<template>
    <nuxt-link :to="'/posts/' + id" class="link-container">
        <article class="post-preview">
            <p>{{ date }}</p>
            <p>{{ workedHours }}</p>
        </article>  
    </nuxt-link>
</template>      

<script>
export default {
    name: 'PostPreview',
    props: {
        id: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        workedHours: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.link-container {
    display: inline;
}

.post-preview {
    border: solid 1px black;
    margin-bottom: 10px;
    padding: 10px;
}

a {
  text-decoration: none;
  color: lightslategray;
  transition: color 150ms;
}

a:hover {
  color: black;
}

.post-preview:hover {
  background-color: lightslategray;

}
</style>