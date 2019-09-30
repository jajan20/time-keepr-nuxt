<template>
  <div class="home-page">
    <h1>Welcome</h1>
    <p>Time Keepr is a simple app that will help you log your worked hours in a simple and efficient way</p>
        <section class="new-post">
            <AppButton @click="$router.push('/admin/new-post')">Register Time</AppButton>
        </section>
    <nuxt-link :to="'/posts/'" class="nuxt-link">Archive</nuxt-link>
  </div>
</template>

<script>
import AppButton from '@/components/UI/AppButton'

export default {
    components: {
        AppButton
    }
}
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  padding: 10px;
}

.new-post {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.nuxt-link {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
