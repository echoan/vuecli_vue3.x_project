<!--
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-22 20:32:15
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-23 16:39:18
-->
<template>
  <div>
    <h2>stepup 属性</h2>
    <h2>props属性</h2>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>title:{{ title }}</h2>
    <hr />
    <h2>attrs 属性</h2>
    <h2>学校名:{{ this.$attrs.school.name }}</h2>
    <h2>学校地址:{{ this.$attrs.school.address }}</h2>
    <hr />
    <h2>emit 属性</h2>
    <button type="" @click="testEmit">setup 中的 emit</button>
    <h2>slots 属性</h2>
    <slot></slot>
    <slot name="nameslot"></slot>
  </div>
</template>

<script>
export default {
  props: ['person', 'title'],
  emits: ['test'], //自定义事件要使用 emits 来接收
  beforeCreate() {
    console.log('hello', this)
  },
  setup(props, context) {
    console.log('你好', this)
    // console.log(props, 'props===setup')
    // console.log(context, 'context===setup')
    // console.log(context.attrs, 'attrs')
    function testEmit() {
      console.log('哈哈哈哈')
      context.emit('test', 10000)
    }
    return {
      testEmit,
    }
  },
}
</script>

<style></style>
