<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    <!-- 3.直接使用props的值 -->
    我是Son组件 {{ title }}
    <button @click="handelClick">修改标题</button>
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  // 2.通过props来接受
  props:['title'],
  methods:{
    // 子传父
    // 1.$emit触发事件,给父组件发送消息通知
    handelClick(){
      this.$emit('changeTitle','传智教育')
    }
  }
}
</script>

<style>

</style>