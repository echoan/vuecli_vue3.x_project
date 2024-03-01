<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-23 22:54:47
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-23 23:21:41
-->
<template>
  <div>
    <h2>shallowRef 和 shallowReactive 属性</h2>
    <h2>shallowRef</h2>
    <h2>年龄为 {{ age }}</h2>
    <h2>薪水:{{ job.salary }}K</h2>
    <hr />
    <h2>shallowReactive</h2>
    <h2>岗位:{{ newJob.name }}</h2>
    <h2>年薪:{{ newJob.salary_year.num }}万</h2>
    <button type="" @click="age += 1">更改年龄</button>
    <button type="" @click="job.salary += 1">涨薪</button>
    <button type="" @click="newJob.name += '~'">改变岗位名</button>
    <button type="" @click="newJob.salary_year.num += 1">涨年薪</button>
  </div>
</template>

<script>
import { shallowRef, shallowReactive } from 'vue'
export default {
  setup() {
    let age = shallowRef(10)
    let job = shallowRef({
      salary: 30,
    })
    let newJob = shallowReactive({
      name: '前端',
      salary_year: {
        num: 35,
      },
    })
    return {
      age,
      job,
      newJob,
    }
  },
}
</script>

<style></style>
