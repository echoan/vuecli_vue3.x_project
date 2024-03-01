<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-23 18:27:37
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-23 21:04:37
-->
<template>
  <div>
    <h2>vue3中的监视watch ref的数据</h2>
    <h2>当前和为{{ sum }}</h2>
    <h2>当前的message为 {{ message }}</h2>
    <h2>当前的age为 {{ age }}</h2>
    <button type="" @click="sum += 1">sum+1</button>
    <button type="" @click="message += '!'">更改message</button>
    <button type="" @click="age += 10">更改age</button>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'
export default {
  setup() {
    let sum = ref(0)
    let message = ref('hello')
    let age = ref(200)
    //监视 ref 定义的一个数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum发生了变化', newValue, oldValue)
    // })
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
    watchEffect(() => {
      // 用到了 age 就会监视age 属性 age 变化 就会触发回调
      let x = age.value
      console.log('watchEffect 配置的回调要执行了')
    })
    return {
      sum,
      message,
      age,
    }
  },
}
</script>

<style></style>
