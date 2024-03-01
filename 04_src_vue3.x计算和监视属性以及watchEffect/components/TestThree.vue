<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-23 19:00:19
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-23 19:25:10
-->
<template>
  <div>
    <h2>vue3 中 watch 监视reactive 创建的对象</h2>
    <h2>姓名{{ person.name }}</h2>
    <h2>年龄为 {{ person.age }}</h2>
    <h2>薪水:{{ person.job.a.salary }}K</h2>
    <button type="" @click="person.name += '~'">更改姓名</button>
    <button type="" @click="person.age += 1">更改年龄</button>
    <button type="" @click="person.job.a.salary += 1">涨薪</button>
  </div>
</template>

<script>
import { reactive, watch } from 'vue'
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
    /*
        使用 watch 来监视 reactive 定义的数据 person
        1. 默认开启了深度监视 即使添加 deep:false 也不会生效
        2. 拿不到oldValue,实际上拿到的oldValue 和 newValue 一样 都是最新的数据
    */
    // watch(person, (newValue, oldValue) => {
    //   console.log('person变化了', newValue, oldValue)
    // })

    /*
       watch 监视 reactive 数据的某个非对象属性时 可以获取到oldValue
    */
    // watch(
    //   () => person.age,
    //   (newValue, oldValue) => {
    //     console.log('person.age变化了', newValue, oldValue)
    //   },
    // )

    /*
       watch 监视 reactive 数据的某些非对象属性时 同样可以获取到oldValue,且此时的newValue 和 oldValue 都是数组
    */
    // watch([() => person.age, () => person.name], (newValue, oldValue) => {
    //   console.log('person.age或者name变化了', newValue, oldValue)
    // })

    /*
       watch 监视 reactive 数据的某个层次较深的对象时  此时要开启深度监视 deep:true， 而且此时也是拿不到oldValue
    */
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log('person.job改变了', newValue, oldValue)
      },
      {
        deep: true,
      },
    )

    return {
      person,
    }
  },
}
</script>

<style></style>
