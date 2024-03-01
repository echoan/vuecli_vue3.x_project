<template>
  <div>
    <TestOne></TestOne>
    <hr />
    <TestTwo></TestTwo>
    <hr />
    <TestThree></TestThree>
  </div>
</template>

<script>
import TestOne from './components/TestOne.vue'
import TestTwo from './components/TestTwo.vue'
import TestThree from './components/TestThree.vue'
export default {
  components: {
    TestOne,
    TestTwo,
    TestThree,
  },
}
</script>

<style></style>
