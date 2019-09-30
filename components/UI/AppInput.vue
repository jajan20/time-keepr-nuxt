<template>
    <div class="input-control">
        <label><slot/></label>
            <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)">
    </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
label {
    display: inline-block;
    width: 85px;
}

input {
    border: solid 1px slategray;
    outline: none;
    transition: all 150ms;
    margin-bottom: 20px;
    padding: 10px;
}

input:focus,
input:hover {
    border-color: #00BFFF;
}
</style>