<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>
.button {
  background: #00BFFF;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.24);
  border-radius: 4px;
  outline: none;
  padding: 10px 20px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
}

.button:hover,
.button:active {
  background-color: #90E3FF;
}
</style>
