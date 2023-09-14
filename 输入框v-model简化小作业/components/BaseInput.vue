<template>
  <div>
    <input type="text" :value="value" @input="handleChange">
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:String
    }
  },
  methods:{
    handleChange(e){
      this.$emit('input',e.target.value)
    }
  }
}
</script>

<style>
</style>