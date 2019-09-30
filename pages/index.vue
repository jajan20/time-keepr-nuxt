<template>
  <div class="home-page">
    <section class="welcome-container">
      <h1>Hello World</h1>
      <p>Time Keepr is a simple app that will help you log your worked hours in a simple and efficient way</p>
      <button>Continue</button>
    </section>
    <section class="overview">
      <PostPreview id="1" date="01-01-2019" workedHours="09:20h"/>
      <PostPreview id="2" date="05-01-2019" workedHours="08:15h"/>
      <PostPreview id="3" date="09-01-2019" workedHours="03:30h"/>
    </section>
  </div>
</template>

<script>
import PostPreview from '../components/posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
</style>
