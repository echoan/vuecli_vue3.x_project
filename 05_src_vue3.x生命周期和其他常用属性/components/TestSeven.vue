<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-24 09:21:43
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-24 09:35:28
-->
<template>
  <div>
    <h2>customRef的使用</h2>
    <input type="" name="" v-model="keyword" />
    <p>{{ keyword }}</p>
  </div>
</template>

<script>
import { customRef, ref } from 'vue'
export default {
  setup() {
    //使用customRef 来实现防抖
    //let keyword = ref('hello')
    function myRef(value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log('有人读取了keyword')
            track() //通知vue 追踪 value的变化
            return value
          },
          set(newValue) {
            clearInterval(timer)
            console.log(newValue, '有人修改keyword,newValue')
            value = newValue
            timer = setInterval(() => {
              trigger() //通知vue 去重新解析模板
            }, delay)
          },
        }
      })
    }
    let keyword = myRef('hello', 500)
    return {
      keyword,
    }
  },
}
</script>

<style></style>
