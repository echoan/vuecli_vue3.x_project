<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-22 20:32:15
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-23 09:55:09
-->
<template>
  <div>
    <h1>ref函数定义响应式数据</h1>
    <h2>地址:{{ address }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>工作:{{ job.type }}</h2>
    <h2>收入:{{ job.salary }}</h2>
    <hr />
    <h1>rreactive函数定义响应式数据</h1>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>工作:{{ person.workType }}</h2>
    <h2>收入:{{ person.salary }}</h2>
    <h2>爱好:{{ person.hobby }}</h2>

    <button type="" @click="hello">测试setup中的方法</button>
    <button type="" @click="editData">修改setup中的数据</button>
  </div>
</template>

<script>
//import { h } from 'vue'   setup 返回一个渲染函数使用
import { ref, reactive } from 'vue'
export default {
  name: 'App',
  // setup 返回一个对象   测试setup 暂时不考虑数据的响应式问题（引入ref函数之前）。
  setup() {
    let address = ref('北京')
    let age = ref(30)
    let job = ref({
      type: '前端开发工程师',
      salary: '20k',
    })
    let person = reactive({
      name: 'tom',
      age: 30,
      workType: '前端开发',
      salary: 30000,
      hobby: ['篮球', '音乐', '读书'],
    })
    function hello() {
      alert('你好，世界')
    }
    function editData() {
      address.value = '北京海淀'
      age.value = 31
      job.value.type = '高级前端开发工程师'
      job.value.salary = '30k'
      person.age = 31
      person.salary = 32000
      person.hobby[2] = '学习'
    }
    return {
      address,
      age,
      job,
      person,
      hello,
      editData,
    }
  },
  //setup 返回一个渲染函数（很少用）
  // setup() {
  //   // return ()=>{ return h('h2','你好')}
  //   //简写为
  //   return () => h('h2', '你好')
  // },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
