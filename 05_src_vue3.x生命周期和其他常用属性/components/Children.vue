<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-24 09:49:34
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-24 09:58:36
-->
<template>
  <div>
    <h2>我是App.vue的孙组件</h2>
    <h2>下面展示的是从App.vue传递来的数据</h2>
    <h2>品牌:{{ name }}</h2>
    <h2>价格:{{ price }}</h2>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue'
export default {
  setup() {
    let myCar = inject('car')
    return { ...toRefs(myCar) }
  },
}
</script>

<style></style>
