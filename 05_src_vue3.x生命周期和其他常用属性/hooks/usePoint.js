/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-23 22:06:41
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-23 22:07:47
 */
import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function () {
  let currentPoint = reactive({
    x: 0,
    y: 0,
  });
  function getPoint(event) {
    currentPoint.x = event.x;
    currentPoint.y = event.y;
  }
  onMounted(() => {
    window.addEventListener("click", getPoint);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", getPoint);
  });
  return currentPoint;
}
