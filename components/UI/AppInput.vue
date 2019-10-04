<template>
    <div class="input-control">
        <label><slot/></label>
            <input
            type="time"
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

input:focus {
  box-shadow: 0 0 0 1px rgba(0,191,255,0.18);
  border-color: #00BFFF;
}
input:hover {
    border-color: #00BFFF;
}
</style>