<template>
  <div class="app">
    <BaseSelect :selectId="selectId"  @changeId="selectId= $event"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect'
export default {
  data() {
    return {
      selectId: '103',
    }
  },
  components: {
    BaseSelect,
  },
  methods: {
    handleChange(e) {
      console.log(e);
      this.selectId = e
    }
    
  }
}
</script>

<style>
</style>