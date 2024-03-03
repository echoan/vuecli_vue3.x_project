<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-23 18:27:37
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-03 12:00:22
-->
<template>
  <div>
    <h2>vue3中的监视watch ref的数据</h2>
    <h2>当前和为{{ sum }}</h2>
    <h2>当前的message为 {{ message }}</h2>
    <h2>当前的age为 {{ age }}</h2>
    <h2>person 姓名:{{ person.name }}</h2>
    <h2>person 薪资:{{ person.salary }}k</h2>
    <button type="" @click="sum += 1">sum+1</button>
    <button type="" @click="message += '!'">更改message</button>
    <button type="" @click="age += 10">更改age</button>
    <button type="" @click="changeName">更改名字</button>
    <button type="" @click="changeSalary">更改薪资</button>
    <button type="" @click="changePerson">直接更改person整个对象</button>
  </div>
</template>

<script>
import { ref, watch, watchEffect, toRef } from 'vue'
export default {
  setup() {
    let sum = ref(0)
    let message = ref('hello')
    let age = ref(200)
    let person = ref({
      name: 'tom',
      salary: 30,
    })
    //监视 ref 定义的一个数据
    let stopWatch = watch(sum, (newValue, oldValue) => {
      console.log('sum发生了变化------', newValue, oldValue)
      if (newValue >= 10) {
        stopWatch()
      }
    })
    // watch 调用的时候 有返回值，是个函数，可以通过调用这个函数来结束 监听
    console.log(stopWatch, 'x')
    //监视ref定义的多个数据 此时newValue oldvalue 为一个数组
    watch(
      [sum, message],
      (newValue, oldvalue) => {
        console.log('sum或mesage变了', newValue, oldvalue)
      },
      {
        immediate: true,
      },
    )
    //监听 ref定义的 对象类型 数据 不配置 deep:true  其属性变化时监测不到 监测属性时 新旧值一样，监测整个对象时，新旧值不一样
    watch(
      person,
      (newValue, oldvalue) => {
        console.log(newValue, oldvalue)
      },
      { deep: true },
    )
    watchEffect(() => {
      // 用到了 age 就会监视age 属性 age 变化 就会触发回调
      let x = age.value
      console.log('watchEffect 配置的回调要执行了')
    })
    function changeName() {
      person.value.name += '~'
    }
    function changeSalary() {
      person.value.salary += 2
    }
    function changePerson() {
      person.value = { name: 'lucky', salary: 40 }
    }

    return {
      sum,
      message,
      age,
      person,
      changeName,
      changeSalary,
      changePerson,
    }
  },
}
</script>

<style></style>
