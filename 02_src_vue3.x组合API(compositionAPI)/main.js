/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-02-22 20:32:15
 * @LastEditors: Chengya
 * @LastEditTime: 2024-02-22 21:42:46
 */
//此处引入的不再是vue 的构造函数 而是vue 的工厂函数 createApp
import { createApp } from "vue";
import App from "./App.vue";

//创建vue的实例对象app，并挂载到id为app容器;创建的实例对象类似vue2.x中的vm，但是比vm更加轻量化
createApp(App).mount("#app"); //初始化写法。等同于 以下写法
// const app = createApp(App);
// app.mount("#app");
