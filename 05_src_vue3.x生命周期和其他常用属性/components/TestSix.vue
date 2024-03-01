<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-23 23:55:20
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-24 00:28:08
-->
<template>
  <div>
    <h2>toRaw 和 markRaw 属性</h2>
    <h2>住址:{{ person.address }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>职业:{{ person.work }}</h2>

    <button type="" @click="person.address += '～'">修改住址</button>
    <button type="" @click="person.age += 1">修改年龄</button>
    <button type="" @click="addwork">添加职业</button>
    <button type="" @click="changeSalary">修改职业薪水</button>
    <button @click="useToRaw">使用toRaw</button>
  </div>
</template>

<script>
import { reactive, toRaw, markRaw, toRefs } from 'vue'
export default {
  setup() {
    let person = reactive({
      address: '北京',
      age: 30,
    })
    function useToRaw() {
      const new_person = toRaw(person)
      console.log(new_person, '输出普通对象person')
    }
    function addwork() {
      let work = { name: '司机', salary: 6000 }
      person.work = markRaw(work)
    }
    function changeSalary() {
      person.work.salary += 100
      console.log(person.work.salary, 'mm==')
    }

    return {
      person,
      ...toRefs(person),
      useToRaw,
      addwork,
      changeSalary,
    }
  },
}
</script>

<style></style>
