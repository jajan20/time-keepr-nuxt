<template>
  <div class="home-page">
    <h1>Welcome</h1>
    <p>Time Keepr is a simple app that will help you log your worked hours in a simple and efficient way</p>
    <button class="button">Register Time</button>
    <nuxt-link :to="'/posts/'" class="nuxt-link">Archive</nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home-page {
  margin: 10px;
  padding: 10px;
  border: solid 1px black;
  width: 320px;
  height: 568px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.button {
  margin: 30px auto;
  background: #00BFFF;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.24);
  border-radius: 4px;
  outline: none;
  padding: 10px 20px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  width: 50%;
  cursor: pointer;
}

.nuxt-link {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
