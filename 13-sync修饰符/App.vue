<template>
  <div class="app">
    <button @click="isShow=true">退出按钮</button>
    <BaseDialog :visable.sync="isShow"></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from "./components/BaseDialog.vue"
export default {
  data() {
    return {
      isShow:false
    }
  },
  methods: {
    
  },
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>