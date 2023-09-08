<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="add"></TodoHeader>
    <TodoMain :list="list" @del="handleDel"></TodoMain>
    <TodoFooter :list="list" @clear="handleClear"></TodoFooter>
  </section>
</template>

<script>
import TodoFooter from './components/TodoFooter'
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
export default {
  data () {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
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
    },
    handleClear(){
      this.list = []
    }
  },
  watch:{
    list:{
      deep:true,
      // immediate:true,
      handler(newList){
        localStorage.setItem('list',JSON.stringify(newList))
      }
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
