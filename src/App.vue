<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="add"></TodoHeader>
    <TodoMain :list="list" @del="handleDel"></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<script>
import TodoFooter from './components/TodoFooter'
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
export default {
  data () {
    return {
      list:[
        {id:1,name:'晨跑'},
        {id:2,name:'吃饭'},
        {id:3,name:'学习'}
      ]
    }
  },
  methods:{
    add(todoName){
      this.list.unshift({
        id:+new Date(),
        name:todoName
      })
    },
    handleDel(id){
    this.list = this.list.filter(item => item.id !== id)
    }
  },
  components:{
    TodoHeader,
    TodoFooter,
    TodoMain
  }
}
</script>

<style>

</style>
