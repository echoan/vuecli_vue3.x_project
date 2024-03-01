<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-24 22:51:17
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-24 23:33:26
-->
<template>
  <div class="child">
    <h2>teloport 组件的使用</h2>
    <h2>我是children组件</h2>
    <Son></Son>
  </div>
</template>

<script>
import Son from './Son'
export default {
  components: {
    Son,
  },
  setup() {
    return {}
  },
}
</script>

<style>
.child {
  width: 100%;
  background: skyblue;
}
</style>
