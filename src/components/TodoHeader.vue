<template>
     <!-- 输入框 -->
    <header class="header">
        <h1>小黑记事本</h1>
        <input placeholder="请输入任务" v-model="todoName" @keyup.enter="add" class="new-todo" />
        <button class="add" @click="add">添加任务</button>
    </header>
</template>

<script>
export default {
    data(){
        return{
            todoName:''
        }
    },
    methods:{
        add(){
            if(this.todoName.trim() ==''){
                alert('输入不能为空')
                return
            }
            this.$emit('add',this.todoName)
            this.todoName = ''
        }
    }
}
</script>

<style></style>