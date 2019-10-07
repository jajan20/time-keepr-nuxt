<template>
    <nuxt-link :to="'/posts/' + id" class="link-container">
        <article class="post-preview">
            <p class="post-date">{{ date }} <span class="post-time">{{ time }}</span></p>
            <p>Worked: <strong>{{ workedHours }} hours</strong> and <strong>{{ workedMinutes}} minutes</strong>.</p>
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
        time: {
            type: String,
            required: true
        },
        workedHours: {
            type: Number,
            required: true
        },
        workedMinutes: {
            type: Number,
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
    border-radius: 13px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: rgba(0, 191, 255, 0.2);
    border: solid 1px #00BFFF;
    box-shadow: 0 2px 7px 0 rgba(0,0,0,0.24);
    transition: all 150ms;
}

.post-time {
    font-size: 12px;
}

.post-date {
    margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: black;
  transition: color 150ms;
}

a:hover {
  color: black;
}

.post-preview:hover {
  background-color: rgba(0, 191, 255, 1);

}
</style>