<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Children></Children>
    <hr />
    <Suspense>
      <template v-slot:default>
        <TestOne></TestOne>
      </template>
      <template v-slot:fallback>
        TestOne组件正在加载。。。
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Children from './components/Children.vue'
//import TestOne from './components/TestOne,.vue' // 静态引入
const TestOne = defineAsyncComponent(() => import('./components/TestOne,.vue')) // 使用defineAsyncComponent 异步动态引入
export default {
  components: {
    Children,
    TestOne,
  },
  setup() {},
}
</script>

<style>
.app {
  width: 100%;
  padding: 10px;
  background: pink;
}
</style>
