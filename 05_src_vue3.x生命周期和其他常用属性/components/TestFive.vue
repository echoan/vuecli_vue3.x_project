<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-23 23:13:38
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-23 23:20:41
-->
<template>
  <div>
    <h2>readonly 和 shallowReadonly 属性</h2>
    <h2>readonly</h2>
    <h2>年龄为 {{ age }}</h2>
    <h2>薪水:{{ job.salary.num }}万</h2>
    <hr />
    <h2>shallowReadonly</h2>
    <h2>岗位:{{ newJob.name }}</h2>
    <h2>年薪:{{ newJob.salary_year.num }}万</h2>
    <button type="" @click="age += 1">更改年龄</button>
    <button type="" @click="job.salary.num += 1">涨年薪</button>
    <button type="" @click="newJob.name += '~'">改变岗位名</button>
    <button type="" @click="newJob.salary_year.num += 1">涨年薪</button>
  </div>
</template>

<script>
import { ref, reactive, readonly, shallowReadonly } from 'vue'
export default {
  setup() {
    let age = ref(10)
    let job = reactive({
      name: '前端',
      salary: {
        num: 35,
      },
    })
    age = readonly(age)
    job = readonly(job)
    let newJob = reactive({
      name: '前端',
      salary_year: {
        num: 35,
      },
    })
    newJob = shallowReadonly(newJob)
    return {
      age,
      job,
      newJob,
    }
  },
}
</script>

<style></style>
