<template>
  <div>
    <button type="" @click="isShow = !isShow">显示和隐藏</button>
    <TestOne v-if="isShow"></TestOne>
    <hr />
    <TestTwo></TestTwo>
    <hr />
    <TestThree></TestThree>
    <hr />
    <TestFour></TestFour>
    <hr />
    <TestFive></TestFive>
    <hr />
    <TestSix></TestSix>
    <hr />
    <TestSeven></TestSeven>
    <hr />
    <TestEight></TestEight>
  </div>
</template>

<script>
import TestOne from './components/TestOne.vue'
import TestTwo from './components/TestTwo.vue'
import TestThree from './components/TestThree.vue'
import TestFour from './components/TestFour.vue'
import TestFive from './components/TestFive.vue'
import TestSix from './components/TestSix.vue'
import TestSeven from './components/TestSeven.vue'
import TestEight from './components/TestEight.vue'
import { ref, reactive, provide } from 'vue'
export default {
  components: {
    TestOne,
    TestTwo,
    TestThree,
    TestFour,
    TestFive,
    TestSix,
    TestSeven,
    TestEight,
  },
  setup() {
    let isShow = ref(true)
    let car = reactive({
      name: '宝马',
      price: '40w',
    })
    provide('car', car)
    return {
      isShow,
    }
  },
}
</script>

<style></style>
