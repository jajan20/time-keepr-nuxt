<template>
        <article class="single-post">
            <p><strong>ID:</strong> {{ id }}</p>
            <p><strong>Uploaded on:</strong> {{ date }}</p>
            <p><strong>Started at:</strong> {{startTime}}</p>
            <p><strong>Stopped at:</strong> {{endTime}}</p>
            <p>Worked {{ hours }} hours and {{ minutes }}.</p>
        </article>  
</template>      

<script>
export default {
    name: 'SinglePost',
    props: {
        id: {
            type: Number,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        hours: {
            type: Number,
            required: true
        },
        minutes: {
            type: Number,
            required: true
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
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