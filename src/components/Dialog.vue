<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-24 23:02:16
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-24 23:46:54
-->
<template>
  <div>
    <button type="" @click="isShow = true">点击打开弹窗</button>
    <Teleport to="body">
      <div class="mask" v-if="isShow">
        <div class="dialog">
          <h2>这里是一个弹窗</h2>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>

          <button type="" @click="isShow = false">点击关闭弹窗</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let isShow = ref(false)
    return {
      isShow,
    }
  },
}
</script>

<style>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: lightgreen;
}
</style>
