<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-22 20:32:15
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-23 17:31:45
-->
<template>
  <div>
    <h2>vue3中的计算属性</h2>
    <p>
      姓:
      <input type="" name="" v-model="person.firstName" />
    </p>
    <p>
      名:
      <input type="" name="" v-model="person.lastName" />
    </p>
    <p>全名:{{ person.fullName }}</p>
    <p>
      全名:
      <input type="" name="" v-model="person.fullName" />
    </p>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  setup() {
    let person = reactive({
      firstName: '李',
      lastName: '四',
    })
    //计算属性 计算全名   只读
    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName
    // }) 或者
    //person.fullName = computed(() => person.firstName + '-' + person.lastName)

    //计算属性 完整写法 读和改
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },

      set(value) {
        let currentNameArr = value.split('-')
        person.firstName = currentNameArr[0]
        person.lastName = currentNameArr[1]
      },
    })

    return {
      person,
    }
  },
}
</script>

<style></style>
