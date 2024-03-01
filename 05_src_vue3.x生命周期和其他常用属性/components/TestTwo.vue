<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-23 21:57:56
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-23 22:11:43
-->
<template>
  <div>
    <h2>自定义hook函数</h2>
    <p>当前鼠标的x坐标:{{ currentPoint.x }},y坐标:{{ currentPoint.y }}</p>
  </div>
</template>

<script>
//import { onBeforeUnmount, onMounted, reactive } from 'vue'
import Point from '../hooks/usePoint'
// console.log(Point, 'Point==')
export default {
  setup() {
    // let currentPoint = reactive({
    //   x: 0,
    //   y: 0,
    // })
    // function getPoint(event) {
    //   currentPoint.x = event.x
    //   currentPoint.y = event.y
    // }
    // onMounted(() => {
    //   window.addEventListener('click', getPoint)
    // })
    // onBeforeUnmount(() => {
    //   window.removeEventListener('click', getPoint)
    // })

    //将以上逻辑 写在 hooks 目录 usePoint.js 文件中 在此组件中使用
    const currentPoint = Point()
    return {
      currentPoint,
    }
  },
}
</script>

<style></style>
