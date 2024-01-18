# Vue3

## Vue 设计初衷

- 响应式想要解决的问题

```javascript
let a = 1;
let b = 2 * a;
// 要始终保持b是a的2倍，需要 指令式 的调用方法
a = 3;
b = 2 * a;
// 响应式想要解决的是类似 fx = A * 2 这类有明确关系的中间处理函数的维护成本；保证A和B的同步
```

```vue
<!-- 衍生：加入state的a属性修改，界面dom要显示 出来；
 维护的是状态和dom输出之间的逻辑（声明式渲染） -->

<span>
{{state.a * 10}}
</span>

onStateChanged (()=>{ view = render(state) })
```

- vue 实现了追踪变量的依赖（称之为追踪器），然后执行对应的“副作用”逻辑

## Vue2 和 Vue3 的不同

1. 双向数据绑定原理不同
2. 是否支持碎片
   1. vue2：vue2 不支持碎片。
   2. vue3：vue3 支持碎片（Fragments），就是说可以拥有`多个根节点`。
3. API 类型不同
   1. vue2：vue2 使用选项类型 api，选项型 api 在代码里分割了不同的属性：data,computed,methods 等
   2. vue3：vue3 使用 Composition API ，相比于旧的 api 使用属性来分组，这样代码会更加简便和整洁
4. 定义数据变量和方法不同
   1. vue2：vue2 是把数据放入 data 中，在 vue2 中定义数据变量是 data(){} ，创建的方法要在 methods:{} 中
   2. vue3：vue3 就需要使用一个新的 setup()方法，此方法在组件初始化构造的时候触发
5. 生命周期的变化
   | Vue2 生命周期钩子 | Vue3 生命周期钩子 | 描述 |
   |------------------|---------------------|-----------------------------------------------------------------------|
   | beforeCreate() | setup() | 组件实例开始创建，初始化数据观测和事件方法之前 |
   | created() | - | 组件实例已经完全创建，属性和方法完成绑定，但 DOM 还未生成 |
   | beforeMount() | onBeforeMount() | 在挂载开始之前调用，相关的 render 函数首次被调用 |
   | mounted() | onMounted() | 组件实例被挂载到 DOM 中，完成了模板渲染和虚拟 DOM 转换为真实 DOM 的过程 |
   | beforeUpdate() | onBeforeUpdate() | 组件数据更新之前调用，即将重新渲染但新的虚拟 DOM 尚未生成时触发 |
   | updated() | onUpdated() | 组件完成数据更新和新的虚拟 DOM 生成后，DOM 更新完毕时调用 |
   | beforeDestroy() | onBeforeUnmount() | 在实例销毁前调用，此时组件仍然完全可用，可以在这时执行清理操作 |
   | destroyed() | onUnmounted() | 组件实例从 DOM 中移除，并解绑所有数据绑定、指令及事件监听器之后调用 |

注：Vue3 中的 `setup()` 函数替代了 Vue2 的多个生命周期钩子，它在组件实例创建之初运行，可以在其中返回对象以暴露响应式属性和生命周期钩子。

此外，Vue3 中没有直接与 Vue2 `created()` 对应的钩子函数，需要在 `setup()` 函数内部处理相应的逻辑。

6. PatchFlag 带来的性能提升

   - Vue 2.x 中的虚拟 DOM 是全量对比的模式，而到了 Vue 3.0 开始，新增了静态标记（PatchFlag）
   - Vue3 在模板编译阶段 用 hoisted、openBlock 进行 静态提升；由 Vue2 的 vdom 全量对比改成只对比修改过的 dom

![hoisted、openBlock](./imgs/hoisted.jpg)

7. 事件缓存

- Vue3 的 cacheHandler 可在第一次渲染后缓存我们的事件。相比于 Vue2 无需每次渲染都传递一个新函数

8. 打包优化

- Tree-shaking：模块打包 webpack、rollup 等中的概念。移除 JavaScript 上下文中未引用的代码。主要依赖于 import 和 export 语句，用来检测代码模块是否被导出、导入，且被 JavaScript 文件使用

## Vue3 仓库目录概览

| 包名                 | 描述                                                                           |
| -------------------- | ------------------------------------------------------------------------------ |
| @vue/shared          | 包含通用的工具函数和常量，是其他包的依赖项                                     |
| @vue/reactivity      | 实现了 Vue.js 的响应式系统，包括依赖追踪和触发更新等功能                       |
| @vue/compiler-core   | Vue.js 编译器的核心包，将模板编译为渲染函数                                    |
| @vue/runtime-core    | Vue.js 运行时的核心包，提供组件实例化和虚拟 DOM 渲染等功能                     |
| @vue/runtime-dom     | Vue.js 运行时的 DOM 版本包，提供在浏览器环境下运行 Vue.js 的功能               |
| @vue/compiler-dom    | Vue.js 编译器的 DOM 版本包，将模板编译为浏览器可执行的渲染函数                 |
| @vue/server-renderer | Vue.js 服务器端渲染（SSR）的渲染器包，用于在服务器端渲染 Vue.js 应用           |
| @vue/compiler-ssr    | Vue.js 编译器的服务器端渲染（SSR）版本包，将模板编译为服务器端可执行的渲染函数 |
| @vue/test-utils      | Vue.js 的测试工具包，用于编写和运行单元测试和集成测试                          |
| @vue/use             | Vue.js 的 Composition API 的实现包，用于支持组合式开发                         |

## @vue/shared 包概览

| 文件名              | 描述                                           |
| ------------------- | ---------------------------------------------- |
| codeframe.ts        | 代码框架生成工具                               |
| domAttrConfig.ts    | DOM 属性配置                                   |
| domTagConfig.ts     | DOM 标签配置                                   |
| escapeHtml.ts       | HTML 转义工具函数                              |
| general.ts          | 通用工具函数                                   |
| globalsAllowList.ts | 全局变量白名单配置                             |
| index.ts            | 入口文件，导出了@vue/shared 包中的各种工具函数 |
| looseEqual.ts       | 宽松相等性检查工具函数                         |
| makeMap.ts          | 创建映射表的工具函数                           |
| normalizeProp.ts    | 属性规范化工具函数                             |
| patchFlags.ts       | 补丁标记常量定义                               |
| shapeFlags.ts       | 节点类型标记常量定义                           |
| slotFlags.ts        | 插槽标记常量定义                               |
| toDisplayString.ts  | 将值转换为显示字符串的工具函数                 |
| typeUtils.ts        | 类型相关的工具函数                             |

`@vue/shared`这些文件主要提供了不同的工具函数和配置，用于支持 Vue.js 的核心功能和特性的实现。
