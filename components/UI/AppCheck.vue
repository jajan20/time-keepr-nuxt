<template>
    <div class="input-check">
        <input type="checkbox" v-if="controlType === 'input'" v-bind="$attrs" :value="minutes" @change="$emit('input', $event.target.value)">
        <label><slot/></label>
    </div>
</template>

<script>
export default {
  name: 'AppCheck',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    minutes: {
        type: Number,
        default: ''
    }
  }
}
</script>

<style scoped>
.input-check {
    display: flex;
    align-items: center;
}

[type=checkbox] {
    margin-right: 10px;
}
</style>