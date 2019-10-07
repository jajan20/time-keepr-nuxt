<template>
    <div class="input-check">
        <input :id="id" type="checkbox" v-if="controlType === 'input'" v-bind="$attrs" :value="minutes" @change="onToggle">
        <label :for="id"><slot/></label>
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
        default: 0
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    onToggle(e) {
      let value = e.target.checked ? this.minutes : 0
      this.$emit('input', value)
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