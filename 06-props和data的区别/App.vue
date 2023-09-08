<template>
  <div class="app">
    <BaseCount :count="count" @changeCount="changeCount"></BaseCount>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue'
export default {
  components:{
    BaseCount
  },
  data(){
    return {
      count:100
    }
  },
  methods:{
    changeCount(count){
      this.count = count
    }
  }
}
</script>

<style>

</style>