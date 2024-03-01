<template>
  <div>
    <TestOne
      :person="data.person"
      title="你好"
      :school="data.school"
      @test="Test"
    >
      <h2>大家好,这里是 默认插槽</h2>
      <!-- vue3.x 中 使用 v-slot 否则不生效 -->
      <!-- <template slot="nameslot">
        <h2>大家好,这里是具名插槽</h2>
      </template> -->
      <template v-slot:nameslot>
        <h2>大家好,这里是具名插槽</h2>
      </template>
    </TestOne>
  </div>
</template>

<script>
import TestOne from './components/TestOne.vue'
import { reactive } from 'vue'
export default {
  components: {
    TestOne,
  },
  setup() {
    let data = reactive({
      person: {
        name: 'tom',
        age: 20,
      },
      school: {
        address: '北京',
        name: '中国科学院大学',
      },
    })
    function Test(n) {
      console.log('setup中的emit测试,参数为' + n)
    }

    return {
      data,
      Test,
    }
  },
}
</script>

<style></style>
