<template>
  <div>
    <nuxt class="nuxt"/>
  </div>
</template>

<style>
html {
  font-family: 'Montserrat', sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


/*-------------------*/
/* IPHONE CONTAINER */
/*-----------------*/
body {
  margin: 10px;
  width: 375px;
  height: 100%;
  min-height: 812px;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.24);
  border: solid 1px slategrey;
}

#__nuxt,
#__layout,
#__layout > div {
  height: 100%;
}

.nuxt-link {
  color: #00BFFF;
  transition: all 150ms;
}

.nuxt-link:hover {
  filter: brightness(50%);
}
</style>
