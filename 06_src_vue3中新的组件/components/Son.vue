<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-24 22:51:54
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-24 23:09:59
-->
<template>
  <div class="son">
    <h2>我是son组件</h2>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from './Dialog'
export default {
  components: {
    Dialog,
  },
}
</script>

<style>
.son {
  width: 100%;
  background: yellow;
  padding: 20px;
}
</style>
