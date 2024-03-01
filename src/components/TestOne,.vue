<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-24 23:33:48
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-24 23:37:34
-->
<template>
  <div>
    <h2>Suspense 组件的使用</h2>
    <h2>消息内容:{{ message }}</h2>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  async setup() {
    let msg = ref('hello')
    let message = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(msg)
      }, 2000)
    })
    return {
      message,
    }
  },
}
</script>

<style></style>
