<template>
  <div>
    <BaseInput v-model="inputValue"></BaseInput>
  </div>
</template>

<script>
import BaseInput from './components/BaseInput.vue'
export default {
  data(){
    return{
      inputValue:''
    }
  },
  components:{
    BaseInput
  }
}
</script>

<style>

</style>