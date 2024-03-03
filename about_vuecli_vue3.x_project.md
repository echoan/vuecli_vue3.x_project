# vue3.x 相关内容

# Vue3 相比 Vue2 的改变

1.  Vue3 性能上的提升
    打包体积减少 40%+
    初次渲染速度提升 50%+，更新渲染速度快了 130%+
    内存占用 少了 50%+
2.  源码上的升级
    使用 proxy 代替 defineProperty 实现数据的响应式
    重构了虚拟 dom 的实现和 Tree-Shaking(剔除健壮性差的代码)
3.  相较于 Vue2.x 更好的支持了 TypeScript
4.  新增了一些新的特性
    1. Composition API（组合 API）
       setup 配置
       ref 和 reactive 等
    2. 新的内置组件
       Fragment
       Teleport 等
    3. 其他改变
       新的生命周期钩子
       data 选项应始终被声明为一个函数
       移除 keyCode 支持作为 v-on 的修饰符等

# 如何初始化 Vue3.x 的工程 01_src 初始化一个 vue3.x 的项目

1. 使用脚手架工具初始化（推荐）

   官方文档：https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create
   初始化一个 vue3.x 的项目 需要 vue 脚手架工具版本在 4.5.0 以上，版本不满足要求 可以先升级脚手架工具。
   查看脚手架版本 vue -V / vue --version
   版本满足要求的情况通过 vue create vue_project_name 选择 vue3.x 的版本创建初始化项目（过程类比创建 vue2.x 版本的项目）

2. 使用 vite 来初始化一个 vue3.x 的工程（目前不推荐，还未大范围使用）

   vite 官方文档：https://v3.cn.vuejs.org/guide/installation.html#vite
   vite—— 新一代前端构建工具。
   优势：
   开发环境中，无需打包操作，可快速的冷启动。
   轻量快速的热重载（HMR）。
   真正的按需编译，不再等待整个应用编译完成。

   如何使用 vite 来创建一个 vue3.x 的项目 (vite_vue3.x_project 项目的创建)

   npm init vite-app projectName

   cd projectName

   npm install

   npm run dev 运行

3. 初始化的项目与 vue2.x 版本中的一些明显不同之处
   1. 根组件 App.vue 模版不再必须需要一个根容器来进行包裹。
   2. main.js 中 引入的不是 vue 的构造函数 而是 工厂函数 createApp。
   3. 使用 createApp 创建 vue 的实例对象 相较于 vue2.x 创建的 VM 更加轻量化
      createApp(App).mount('#app)。

# 常用 Composition API 组合式 api 02_src_vue3.x 组合 API

官方文档: https://v3.cn.vuejs.org/guide/composition-api-introduction.html

1. setup

   1. setup 是 vue3 中的新的配置项，值为一个函数，一个组件中要用到的数据 ，方法，计算属性等内容，都要在 setup 中进行配置。这与 vue2 中是不同的。
   2. setup 函数有两种返回值
      返回一个对象，那么返回的对象中的数据，方法等可以在模板中直接使用。
      也可以返回一个渲染函数，自定义要渲染的 dom 结构，替换掉 template 模板的内容（很少用）。
   3. 注意点:尽量不要与 Vue2.x 配置混用
      Vue2.x 配置（data、methos、computed...）中可以访问到 setup 中的属性、方法。
      但在 setup 中不能访问到 Vue2.x 配置（data、methos、computed...）。
      如果有重名, setup 优先 vue2.x 中的同名配置，但是一般不建议在 vue3 中再去使用 vue2.x 的配置。
   4. setup 不能是一个 async 函数，因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性。（实质上，setup 可以返回一个 Promise 实例，可以是一个 async 函数 但需要 Suspense 和异步组件的配合）

2. ref 函数
   ref 函数的作用:将 setup 中的数据定义成响应式的数据( 创建一个包含响应式数据的引用对象（reference 对象，简称 ref 对象）)。
   使用

   1. 引入 import {ref} from 'vue'
   2. 定义数据时 使用 let a = ref(100)
   3. 修改数据时 通过 a.value = 200 这种形式去修改，但是在模板中使用 不需要通过.value，直接使用即可。

   ref 包装接收的数据可以是：基本类型、也可以是对象类型。
   基本类型的数据：响应式依然是靠 Object.defineProperty()的 get 与 set 实现的。
   对象类型的数据：响应式是内部 求助 Vue3.0 中的一个新函数 reactive 函数（函数内部使用 Proxy ）来实现。

3. reactive 函数
   reactive 函数用来将一个引用数据类型（对象，数组等）定义为响应式的数据，但是不能应用于基本数据类型（基本数据类型使用 ref 函数）。
   reactive() 对引用数据类型的包装后，返回了一个代理对象（Proxy 实例对象，简称为 proxy 对象）
   reactive() 定义的响应式数据是深层次的（对象数据的层级很深也可以监测的到）
   reactive() 实现响应式数据，本质上是内部基于 ES6 的 Proxy 来实现的，通过代理对象 实现对源对象内部数据的操作。
   如何 使用 reactive 将引用数据类型数据包装成为响应式数据

   1. 引入 import {reactive} from 'vue'
   2. 使用 reactive() 包裹 引用数据类型 reactive({name:'tom'}) / reactive([1,2,3])
   3. 使用时直接使用即可，修改时可以直接修改 也不需要像 ref 包装后 通过.value 来修改。
   4. 修改 reactive 整个对象时 不允许直接修改，要使用 Object.assign(targetObj,{}) 修改

# vue3.x 数据响应式原理 03_src_vue3.x 响应式数据原理相关以及 setup 几个注意点

1. vue2.x 中 数据响应式回顾
   实现原理:
   对象类型: 通过 Object.defineProperty() 对数据的读取修改进行数据劫持。
   数组类型: 通过重写更新数组的一系列方法来实现（对原有数组的变更方法进行了包装）。

   存在问题:
   对象新增，删除属性 界面不会更新。（vue2.x 中可以使用 Vue.set/vm.$set/this.$set 来解决该问题 ）
   数组通过下标直接修改 界面不会更新 （vue2.x 中可以使用 push,unshift,pop,shift,splice,sort,reverse 等 Vue 二次包装过的数组方法操作或者使用 Vue.set 或者 vm.$set 或者this.$set, 或者对原来初始化时的数组进行覆盖式重写来解决问题）。

2. vue3.x 中 数据响应式原理
   实现原理:
   vue3.x 中 通过 Proxy 实现对 对象中任意属性变化（属性的读取，修改，增加，删除）的代理拦截，然后通过 Reflect 实现通过代理对象对源对象的属性进行响应式操作。

   Proxy 和 Reflect 可以通过 window 直接访问到（window 都内置对象）
   MDN 文档中描述的 Proxy 与 Reflect：
   Proxy：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   Reflect：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

   模拟 vue3.x 中实现 响应式数据详见文件 /Users/ancheng/Desktop/vue 再学习/about_vue_base/14.html

3. setup 两个注意点
   1. setup 执行早于 beforeCreate,在 beforeCreate 之前执行一次。
   2. setup 中的参数
      props:值为对象 内容为组件外部传入的且组件内部声明接收了的属性
      context: 上下文对象，包含如下属性:
      attrs: 值为对象,内容为组件外部传递过来的，但是没有在 props 中 接收的属性 相当于 vue2.x 中的 this.$attrs
      slots:外部传入的插槽内容，相当于 vue2.x 中的 this.$slots
      emit:分发自定义事件的函数 相当于 vue2.x 中的 this.$emit

# vue3.x 中常用的其他属性 04_src_vue3.x 计算属性监视属性和 watchEffect

1. 计算属性

   1. 引入 计算属性 import {computed} from 'vue'
   2. 直接在对象上添加要计算的属性，通过 computed 来计算，只不过在 vue3.x 中 计算属性 compued 是一个函数。 computed(()=>{})
   3. 计算属性 计算出的属性 默认是只读的，如果想要修改，那么需要在计算属性中 通过添加 get 和 set 来实现。
      computed({
      get(){},
      set(){}
      })

2. 监视属性 watch

   1. 引入 import {watch} from 'vue'
   2. 使用 watch(propName,(newValue,oldValue)=>{},{
      immediate:true
      deep:true
      })
      第一个参数:propName 要监视的属性名,监视多个时可以是数组
      第二个参数:监视业务代码，监视多个属性时 newValue/oldValue 为数组
      第三个参数 {} immediate:true/deep:true 放在第三个参数里面

   3. 使用 watch 来监视 reactive 创建的数据时 和 监视 ref 创建的数据有一些不同之处

      1. 监视 reactive 定义的数据时 无法获取到 oldValue,此时 oldValue 和 newValue 一样都是最新的数据，且深度监视 deep:true 是强制开启的，即使 人为设置 deep:false 也不会生效。
      2. 监视 reactive 定义的数据的某个 非对象属性时,第一个参数 属性名要使用函数 ()=>person.propName，
         要监视多个的话，使用数组 [()=>person.propName1,()=>person.propName2] 此时 可以获取到 oldValue
      3. 监视 reactive 定义的数据的某个对象属性时，同样无法获取到 oldValue,且此时，需要开启 deep:true 才会生效。
      4. watch 监听 ref 定义的对象数据时，如果是监听的整个对象，只有整个对象变化（引用发生变化）时可才可以监听到（在不配置 deep:true 时），且可以获取到 newValue 和 oldValue。如果监听整个对象并且想要当对象某个属性发生变化时也能被监听到，可以 添加 配置 deep:true，但是此时获取到的 newValue 和 oldValue 是一样的，都是最新的值。

   4. watch 调用有返回值，其返回值是一个函数，可以通过执行该函数来结束当前的监听。

3. watchEffect 函数

   watchEffect 也是一个监视属性，但是它与 watch 是不同的

   watch:使用时需要指定要监视的属性，和回调函数
   watchEffect:使用时不需要指明监视哪个属性，监视的回调中用到了哪个属性，就会监视哪个属性。
   watchEffect 在某种程度上有点像 计算属性 computed,只不过 computed 更侧重于计算出来的值，所以要有返回值，而 watchEffect 侧重的是过程，无需有返回值。

# vue3.x 中的 生命周期函数 和 自定义 hook 函数 以及其他常用属性 05_src_vue3.x 生命周期和常用属性

1. vue3.x 中的 生命周期

   1. vue3.x 中的生命周期函数和 vue2.x 中基本一致，只不过，在 vue3.x 中 将 beforeDestroy 和 destroyed 更名为了 beforeUnmount 和 unmounted .
   2. vue3.x 中 生命周期钩子函数可以与 setup 并列写（配置项写法），也可以以组合 api 的形式，写在 setup 中。
      写之前，要先引入，并注意 名称的变化
      import {
      onBeforeMount,
      onMounted,
      onBeforeUpdate,
      onUpdated,
      onBeforeUnmount,
      onUnmounted,
      } from 'vue'

      在 setup 中写时 写成 onBeforeMount(()=>{}) 形式

2. 自定义 hook 函数

   1. 自定义 hook 本质是一个函数，把在 setup 中 所使用的组合 api 进行封装，以便其他组件使用
   2. 可以类比 vue2.x 中的 mixin
      自定义 hook 可以实现 代码复用，使 setup 中的逻辑更加清楚。

3. toRef 和 toRefs 属性
   toRef
   作用:创建一个 ref 对象，其 value 值 指向另一个对象的某个属性 如 const name = toRef(person,'name')
   应用场景: 将响应式对象中的某个属性单独提供给外部使用。

   toRefs 可以看作 toRef 的扩展，toRefs 可以一次创建多个 ref 对象 如 const newPerson = toRefs(person)

4. shallowReactive 和 shallowRef
   两者类比 reactive 和 ref 可以用来定义数据，但是和他们是有差别的。
   shallowReactive：只处理对象最外层属性的响应式（浅响应式），对象中的某个属性如果是多层次的，该属性不会被处理成响应式。
   如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 可以使用 shallowReactive 来定义。

   shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。
   如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 可以使用 shallowRef。

5. readonly 和 shallowReadonly
   readonly: 让一个响应式数据变为只读的（深层也只可读）。
   shallowReadonly：让一个响应式数据变为只读的（浅层只读，深层还可修改）。
   应用场景: 不希望数据被修改时。

6. markRaw 和 toRaw
   toRaw: 将一个由 reactive 定义的响应式数据 转换为普通数据
   使用场景 用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新

   markRaw:标记一个对象，使其永远不会再成为响应式对象

   使用场景:

   1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
   2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。

7. customRef
   customRef 用于 创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制,customRef 有两个重要参数 track 和 trigger。
   理解案例:实现一个防抖效果

8. provide 和 inject
   两者是用来通信的。
   父组件 使用 provide 选项来对外提供数据，后代组件用 inject 来接收数据。
   虽然后代组件也可以是子组件，但是 父子组件之间的通信一般不用 provide 和 inject，props 就足够了，所以
   这种通信方式经常用于父孙组件间。
   使用

   1. 引入 import {provide,inject} from 'vue'
      父组件中 provide(propName,{})
      孙组件中 let propName = inject(propName)

9. 通常用于检查响应式数据的几个 api
   isRef 用来检查一个值是否为 ref 对象
   isReactive 用来检查一个值是否为 reactive 创建的响应式代理
   isReadonly 用来检查一个对象 是否是 readonly 创建的只读代理
   isProxy 用来检查一个对象是否由 reactive 或者 readonly 方法创建的代理。

10. vue3 中 组合 api 带来的优势
    vue2.x 中 配置项 api（data,methods 等 配置项写法）存在的问题:当新增或者修改需求时 需要分别在 data,methods，或者 computed/watch 中里 找到对应功能点的地方去分别修改，修改过程中可能会对现有其他功能逻辑造成问题。

    vue3 中 使用 组合 api 的写法，可以利用 hook 将某个功能的相关数据，方法等抽离成一个个点模块，要修改某个功能，去到对应的 hook 文件中找就可，使代码组织更优雅有序，使代码维护更加清晰便捷。

11. Fragment 标签
    在 Vue2 中: 组件必须有一个根标签
    在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 Fragment 虚拟元素中
    好处: 减少标签层级, 减小内存占用

12. 标签的 ref 属性
    1. 在普通标签上 添加 ref 属性,获取到普通的 dom 节点
       import {ref} from 'vue'
       <h2 ref="hello">hello</h2> ,另外 需要在 setup 中 声明 let hello = ref()
       获取节点时 hello.value
    2. 用在组件上时
       <children ref="children"></children>
       let children = ref()
       获取时 同样通过 children.value
       但是 如果想要获取到组件上的一些数据或者属性 需要 借助 defineExpose 在组件中 配置 可以通过 ref 属性获取到哪些组件中的属性
       在组件中:
       import {defineExpose} from 'vue'
       defineExpose({a,b}) 如此配置 代表 通过组件上的 ref 可以获取到组件的哪些属性

# vue3.x 中的其他常用组件 当前 src 下内容

1. Teleport 组件
   Teleport 是一种能够将我们的组件 html 结构移动到指定位置的技术。
   使用:
   用 teleport 组件 将要传送到组件包裹，在 teleport 组件 通过属性 to 控制组件将来展示到哪个位置。

2. Suspense 组件
   Suspense 用于等待异步组件时渲染一些额外内容，让应用有更好的用户体验
   使用:

   1. import { defineAsyncComponent } from "vue"; 引入
   2. const Child = defineAsyncComponent(() => import("./components/TestOne.vue")); 将一个组件通过 defineAsyncComponent 异步引入。
   3. 使用 Suspense 包裹 <template v-slot:default> 展示 异步组件 <template v-slot:fallback> 展示异步组件加载之前显示的内容
      <Suspense>
      <template v-slot:default>
      <TestOne></TestOne>
      </template>
      <template v-slot:fallback>
      TestOne 组件正在加载。。。
      </template>
      </Suspense>

   一个 setup 的新写法 返回一个 promise 对象，但是这种写法 必须配合 Suspense 和异步组件来使用
   async setup() {
   let msg = ref('hello')
   let message = await new Promise((resolve, reject) => {
   setTimeout(() => {
   resolve(msg)
   }, 2000)
   })
   return {
   message,
   }
   },

3. Vue3.x 中 较 Vue2.x 其他的一些改变

   1. 将全局的 API，即：`Vue.xxx`调整到应用实例（`app`）上

   | 2.x 全局 API（`Vue`）    | 3.x 实例 API (`app`)        |
   | ------------------------ | --------------------------- |
   | Vue.config.xxxx          | app.config.xxxx             |
   | Vue.config.productionTip | 移除                        |
   | Vue.component            | app.component               |
   | Vue.directive            | app.directive               |
   | Vue.mixin                | app.mixin                   |
   | Vue.use                  | app.use                     |
   | Vue.prototype            | app.config.globalProperties |

   2. data 选项应始终被声明为一个函数

   3. 过度类名的更改：

      Vue2.x 写法

      ```css
      .v-enter,
      .v-leave-to {
        opacity: 0;
      }
      .v-leave,
      .v-enter-to {
        opacity: 1;
      }
      ```

      Vue3.x 写法

      ```css
      .v-enter-from,
      .v-leave-to {
        opacity: 0;
      }

      .v-leave-from,
      .v-enter-to {
        opacity: 1;
      }
      ```

   4. 移除 keyCode 作为 v-on 的修饰符，同时也不再支持 config.keyCodes
      移除 v-on.native 修饰符，移除过滤器 filter。

      父组件中绑定事件

      ```vue
      <my-component
        v-on:close="handleComponentEvent"
        v-on:click="handleNativeClickEvent"
      />
      ```

      子组件中声明自定义事件

      ```vue
      <script>
      export default {
        emits: ["close"],
      };
      </script>
      ```

      这里没有写在 子组件 emits 里， 就相当于是原生事件 不是自定义事件
