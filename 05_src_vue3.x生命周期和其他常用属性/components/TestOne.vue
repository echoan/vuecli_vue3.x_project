<template>
  <div>
    <h2>vue3中的生命周期</h2>
    <div>当前sum 为 {{ sum }}</div>
    <button type="" @click="sum += 1">sum+1</button>
  </div>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'
export default {
  setup() {
    let sum = ref(10)
    // 组合api写法 生命周期钩子  beforeCreate 和 created 被setup 替换
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('updated')
    })
    onBeforeUnmount(() => {
      console.log('beforeUnmount')
    })
    onUnmounted(() => {
      console.log('unMounted')
    })
    return {
      sum,
    }
  },
  //配置项写法
  // beforeCreate() {
  //   console.log('beforeCreate')
  // },
  // created() {
  //   console.log('created')
  // },
  // beforeMount() {
  //   console.log('beforeMount')
  // },
  // mounted() {
  //   console.log('mounted')
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate')
  // },
  // updated() {
  //   console.log('updated')
  // },
  // beforeUnmount() {
  //   console.log('beforeUnmount')
  // },
  // unmounted() {
  //   console.log('unMounted')
  // },
}
</script>

<style></style>
