<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-23 19:00:19
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-23 23:21:50
-->
<template>
  <div>
    <h2>vue3 中 toRef 和 toRefs 属性</h2>
    <h2>姓名{{ person.name }}</h2>
    <h2>年龄为 {{ person.age }}</h2>
    <h2>薪水:{{ person.job.a.salary }}K</h2>
    <hr />
    <h2>toRef</h2>
    <h2>姓名{{ name }}</h2>
    <h2>年龄为 {{ age }}</h2>
    <h2>薪水:{{ salary }}K</h2>
    <hr />
    <h2>toRefs</h2>
    <h2>姓名{{ name }}</h2>
    <h2>年龄为 {{ age }}</h2>
    <h2>薪水:{{ job.a.salary }}K</h2>
    <button type="" @click="person.name += '~'">更改姓名</button>
    <button type="" @click="person.age += 1">更改年龄</button>
    <button type="" @click="person.job.a.salary += 1">涨薪</button>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
  setup() {
    let person = reactive({
      name: 'lili',
      age: 20,
      job: {
        a: {
          salary: 30,
        },
      },
    })

    // 使用toRef  为了方便展示
    // return {
    //   person,
    //   name: toRef(person, 'name'),
    //   age: toRef(person, 'age'),
    //   salary: toRef(person.job.a, 'salary'),
    // }

    //使用 toRefs
    return {
      person,
      salary: toRef(person.job.a, 'salary'),
      ...toRefs(person),
    }
  },
}
</script>

<style></style>
