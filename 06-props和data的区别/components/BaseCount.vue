<template>
  <div class="base-count">
    <button @click="countSub">-</button>
    <span>{{ count }}</span>
    <button @click="countAdd">+</button>
  </div>
</template>

<script>
export default {
  // // 1.自己的数据随便修改  （谁的数据 谁负责）
  // data () {
  //   return {
  //     count: 100,
  //   }
  // },
  // 2.外部传过来的数据 不能随便修改
    props:{
        count:{
          type:Number
        }
    },
    methods:{
      countSub(){
          this.$emit('changeCount',this.count - 1)
      },
      countAdd(){
          this.$emit('changeCount',this.count + 1)
      }
    }
}
</script>

<style>
.base-count {
  margin: 20px;
}
</style>