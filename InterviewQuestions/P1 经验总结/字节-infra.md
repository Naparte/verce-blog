# 字节

## web infra 一面

1. 讲下你的 MITO（前端监控系统）的主要功能
2. 你的 SDK 中用户行为栈是怎么获取和更新的
3. 埋点 SDK 是怎么实现新开页面并携带原页面的信息（至少两种方式）
4. 简述 react fiber 的作用，以及实现原理
5. react hook 出现的意义什么？解决了什么问题？
6. Vue.use 这个函数在源码里面做了哪些事情，主要用来干嘛的？
7. 手写代码：实现一个函数，监听浏览器所有的事件（不可枚举）并上报该事件名称

```js
// 由于浏览器环境中，不可枚举的事件类型非常多且无法直接通过常规方式获取，因此我们无法直接监听所有不可枚举的事件
(function () {
  var globalEventTracker = document.createElement("div");
  document.body.appendChild(globalEventTracker);

  function reportEvent(event) {
    console.log("Detected event: ", event.type);
    // 在这里可以替换为实际的上报逻辑，如发送到服务器等
  }

  // 使用事件委托的方式监听常见的DOM事件
  var knownEvents = [
    "click",
    "mousedown",
    "mouseup",
    "mousemove",
    "keydown",
    "keyup",
    "change",
    "input",
    "scroll",
    "resize",
    "load",
    "unload",
    "beforeunload",
    "error",
    "select",
    "focus",
    "blur",
  ];

  knownEvents.forEach(function (eventName) {
    globalEventTracker.addEventListener(eventName, reportEvent, true);
  });
})();
```

8. 说说 webpack 的 plugin 是怎么获取 hook 入参的？

```js
// 假设我们有一个自定义的WebpackPlugin类
class MyWebpackPlugin {
  // 在构造函数中初始化任何需要的状态
  constructor(options) {
    this.options = options;
  }

  // apply方法会在webpack启动时被调用，此时可以访问到compiler对象
  apply(compiler) {
    // compiler对象上的钩子通常涉及整个编译过程
    compiler.hooks.emit.tapAsync("MyWebpackPlugin", (compilation, callback) => {
      // compilation对象上的钩子则与单个编译过程相关
      // 在这里，emit钩子的入参是compilation对象和一个callback函数
      console.log("Emitting assets...");
      console.log("Compilation:", compilation);

      // 我们可以通过compilation对象访问到各种资源、模块等信息
      // 并且可以根据需要修改它们

      // 调用callback通知webpack该钩子已经处理完成
      callback();
    });
  }
}

// 在webpack配置文件中使用该插件
module.exports = {
  // ...其他配置项...
  plugins: [
    new MyWebpackPlugin({
      /* 插件选项 */
    }),
  ],
};

// MyWebpackPlugin插件通过.tapAsync方法监听了emit这个生命周期钩子。
// 当webpack执行到emit阶段时，它会将当前的compilation对象作为参数传递给插件注册的回调函数。
// 不同的hook会有不同的参数，具体参数类型和内容根据webpack文档中对于各个hook的描述而定。
```

9. 手写代码：用 react hook 实现计时器
10. 手写代码：实现类似 webpack plugin 的管道函数

## web infra 二面

1. 讲讲你和普通前端，你的亮点有哪些？
2. 我看了你开源（mitojs），你的代码风格是借鉴 sentry，你出发点是什么？为什么不直接用 sentry 私有化部署，而是自研前端监控？
3. 简单讲讲你的 SDK 的架构、和 sentry 的 SDK 对比，有哪些优势？（行为栈更精确、hooks 更完善）
4. 简单讲讲你的性能监控 SDK（同事开发，借鉴 google 官方 api）
5. 为什么要二次开发 google 开源的性能监控 SDK？
6. SDK 怎么采集用户行为栈（面包屑）？
7. 你是怎么录制页面并回放页面（用开源包 rrweb，并在此基础之上二次开发，说明其录制回放原理）
8. 没用浏览器的官方 api，你是怎么检查当前用户电脑 CPU 的性能？（只有达到某个性能指标才开启录制，因为录制过程需要不断序列号 dom 节点，所以比较耗 CPU）
9. 网页上报数据量高并发，你用 node 是怎么处理的？（redis+rocketMq）
10. 有没有进行压测过你的服务器？最高的 QPS 是多少？
11. 服务端有没有做错误事件聚合，聚合的方式是怎样的？
12. 收集错误时有没有进行采样控制？
13. 如果让你来设计单页应用的性能指标，你会怎么设计？（可以理解成怎么拿到路由间切换和路由间接口返回的时间差）
14. 什么因数会导致 FCP、FMP 等等指标的变化？
15. 了解过 long task，有没有监控这个指标？
16. 手写代码：打印一下斐波那契数列：1 1 2 3 5 8 ....
17. 书写代码：实现深拷贝函数
18. 手写代码：写个单例模式
19. 手写代码：写个节流函数
20. 你如果离职的话，最快的入职时间是什么时候？

## web infra 三面

1. 简单介绍一下你的监控系统
2. 为什么不直接用 sentry 私有化部署，而是自研前端监控？
3. 用飞书画一下整个架构图，画的过程中会问为什么会这样设计？
4. 怎么优化 FCP 这个性能指标？
5. 在做的过程中有没有遇到难点，然后是怎么解决的？
6. 你是怎么检查当前用户电脑 CPU 的性能？（只有达到某个性能指标才开启录制，因为录制过程需要不断序列号 dom 节点，所以比较耗 CPU）
7. 手写代码：实现 transform 函数，将对象转成类似树结构的数组

## 商业化 一面

1. promise 代码题说一下输出顺序

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");
```

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2 start");
  return new Promise((resolve, reject) => {
    reject();
    console.log("async2 promise");
  });
}

console.log("illegalscript start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
})
  .then(function () {
    console.log("promise2");
  })
  .then(function () {
    console.log("promise3");
  });
console.log("illegalscript end");
```

1. display 有那些值
2. display 和 visibility 区别;div 里面放 img，div 设置
   display:none 和 visibility:hidden 对 img 的 src 加载有什么影响？
3. vue2/3 数据劫持对比
4. vue keep-alive 原理及属性,include 和 exclude 都写了同一个路由会怎样？
5. 手写 eventEmitter
6. 一段 vuex action 代码现场 code review（try-catch、默认返回值、promise）
7. 手写柯里化
8. letcode 22 括号生成

## 抖音 一面

1. 讲一下你简历上的项目经历
2. vue2 响应式原理
3. vue3 有哪些优化
4. vue3 composition api 解决了什么问题？
5. react fiber 原理
6. 浏览器事件机制, e.target 和 e.currentTarget 区别，addEventListener 第 3 个参数
7. 浏览器事件循环
8. 浏览器缓存
9. 性能优化方案
10. background-size: cover 和 contain 区别
11. letcode 199. 二叉树的右视图

## 抖音 二面

1. 3 分钟自我介绍
2. 讲一下你简历上的项目经历
3. 猴子吃香蕉，每个猴子的食量为[4,2,1,5,7,3,1]。猴子贪心，最多可以吃自己食量的两倍，但是不能超过当前剩余香蕉数量的一半。求最少多少个香蕉可以满足猴子？
4. 用 react 实现个菜单组件，要求无限嵌套，可点击展开收缩，点击时自己和所有父菜单高亮
5. 你有什么问我的

## 剪映

1. 2min 自我介绍怎么学习前端的
2. 数组 reduce 和 reduceRight 用法和区别
3. 手写代码

```js
// 实现一个方法 splitArr ，接收两个参数，一个数组arr、一个数字a;
// 返回按a长度切割成二维数组（只能基于数组 reduce 方法实现）比如

sprintArr([1, 2, 3, 4, 5, 6, 7, 8], 4);
// return [[1,2,3,4], [5,6,7,8]];

sprintArr([1, 2, 3, 4, 5, 6, 7, 8], 3);
// return [[1,2,3], [4,5,6], [7,8]];

sprintArr([1, 2, 3, 4, 5, 6, 7, 8], 7);
// return [[1,2,3,4,5,6,7], [1]];
```

4. 说下 Promise.all 和 Promise.race 和 Promise.allSettled 和 Promise.any 具体区别

5. 看代码将输出

```js
const arr = [
  Promise.reject(-1),
  new Promise((res) => {
    setTimeout(
      () => {
        res(true);
      },
      500,
      "quick"
    );
  }),
  new Promise((res, rej) => {
    setTimeout(
      () => {
        rej(false);
      },
      1000,
      "slow"
    );
  }),
];

Promise.race(arr).then((res) => console.log(res));
Promise.any(arr).then((res) => console.log(res));
Promise.allSettled(arr).then((res) => console.log(res));
```

6. 宏任务、微任务
7. 看代码输出

```js
window.requestIdleCallback(
  () => {
    console.log(-1);
  },
  { timeout: 2000 }
);
window.requestAnimationFrame(() => {
  console.log(0);
});
async function async1() {
  console.log(1);
  await async2();
  console.log(3);
}
async function async2() {
  console.log(2);
}
async1();
setTimeout(() => console.log(4), 0);
new Promise((resolve) => {
  resolve();
  console.log(5);
}).then(() => {
  console.log(6);
  Promise.resolve().then(() => console.log(7));
});
console.log(8);
```

8. CSS 自定义样式了解过吗？说说怎么用？inset？
9. 手写题：用 css 实现一个三角形
10. 黏性布局怎么用
11. 性能优化展开说说做了哪些
12. 解释强、协缓存，缓存怎么做
13. 前端存储有哪些？
14. serviceWorker 讲一下
15. 实现一下 TypeScript 里面的内置类型

```ts
  Pick类型： Pick<T, K> = ? //  比如有一个inerface A， 需要取A里面的name或者age， Pick<A, 'name' | 'age'>
  Includes： Includes<T, K> = ? //  判断类型中是否拥有指定的类型， Includes<['a', 'b', 'c'], 'a' | 'b'>
```

16. node 用过？ 说一下洋葱圈模型？
17. 出了一道实现 app.use()中间件的手写题目，大概率想看你中间件的原理，怎么写一个 node 中间件.说不了解，就换题目了
18. 聊一下前端安全，怎么防止恶性脚本
19. 除了转义之外？如果中间人服务器拦截用户的 html，往里面写入了 script 标签，然后返回给用户浏览器直接解析了，这种怎么防？
    -- 没了解，面试官提示 CSP ，即 浏览器内容安全策略
20. CSP 具体怎么用，可以做些什么？
21. git rebase 简述
22. 手写命令：假设有 a,b,c,d,e 五个 commit，现在想要把 d 的 commit 记录删掉，其他保留，怎么写命令（commitHash 你可以用 a、b、c 替代）？
23. 手写题，下面 React 这个组件有什么问题，请指出并改正

```js
const Com = (props) => {
  const { A = [] } = props;
  const [B, setB] = useState([]);
  useEffect(() => {
    // some logic
    setB(A);
  }, [A]);
};
```

24. 怎么做包管理，如果有业务的小伙伴引入新的包导致 chunk 变大，怎么处理
25. monorepo、pnpm 了解过吗？
26. 什么是幽灵依赖？怎么解决幽灵依赖的问题？
27. 强链接、软连接是什么
28. 算法题:实现二叉树的蛇形遍历，视觉效果有点像蛇，从下往上盘旋上升，比如

```js
  二叉树如下：
       1
     2   3
    4 5 6 7
  输出 [7,6,5,4,2,3,1]

             1
        2           3
     4    5      6    7
    8 9 10 11 12 13 14 15
  输出 [15,14,13,12,11,10,9,8,4,5,6,7,3,2,1]
```

28. 算法题: 有效果的括号 {}()[]

## 未知团队

1. 对 Flex 布局的理解及其使用场景
2. 介绍一下 Js 中的原型和原型链
3. React 组件之间的传值有几种方式？
4. 常见的水平垂直方式有几种？
5. 说一下类组件和函数组件的区别？
6. 在地址栏里输入一个地址回车会发生哪些事情？
7. 说一下 for...in 和 for...of 的区别？
8. 虚拟 DOM 转换成真实 DOM
9. 实现节流函数和防抖函数
10. 点击刷新按钮或者按 F5、按 Ctrl+F5 （强制刷新）、地址栏回车有什么区别？
11. 实现模板字符串解析
12. Cookie 有哪些字段，作用分别是什么？
13. 介绍一下 Promise.race
14. 说一下 slice splice split 的区别？
15. 浏览器的渲染过程
16. 说一下你对盒模型的理解？
17. Vue 实现双向数据绑定原理是什么？
18. 介绍一下 Promise.any
19. 闭包的应用场景

参考资料：https://blog.csdn.net/feifeiban7354/article/details/134994580

## HR

### 请你自我介绍一下你自己

- 深信服，校招入职，5 年经验，从事前端开发，承接 sass 化项目的报表类的开发和设计，后面在安全类产品线防火墙和上网行为管理，可能和火山引擎有点像，属于产品管理控制台系统，这边主要负责整个前端的用户体验，技术改进，项目统筹等工作；负责比较大的项目，防火墙的整个品牌的升级（老 xp 产品风格，升级成 win 10 风格），推动整个小组的技术改进，ext 升级成 vue，引进生态技术降低小组的开发成本和门槛；

### 你在上一家公司最大的收获是什么？

1. 技术能力提升：通过参与各种项目，我在技术栈的专业知识和技术实践方面得到了显著提高。
2. 团队协作经验：在团队合作中学习到了有效沟通、协同开发以及如何处理团队冲突的宝贵经验。
3. 行业洞见与业务理解：深入了解了所在行业的前沿趋势和业务逻辑，提高了对市场需求的敏锐度和产品思维能力。
4. 项目管理技能：通过主导或参与不同阶段的项目，锻炼了我的时间管理、优先级设置及风险管理等项目管理技能。
5. 职业发展路径规划：公司在职业发展规划上的支持和指导帮助我明确了个人长期发展的方向和路径。

### 项目分享

- STAR 法则

1. `项目背景与目标`：产品风格老旧，体验较差，需要重新设计；
2. `实施过程与我的角色`：负责整个产品技术方案设计，组件库抽取，换肤方案设计，
3. `我的主要贡献`：实现了一套自动提取变量色的方案，方便和设计组对接；有了一套全新的业务组件库，方便和开发组对接；
4. `遇到的挑战与解决方案`: 项目体量大，如何快速提取品牌色
5. `项目成果与经验总结`: 整个交互上风格统一，用户愿意升级，满意度高

### 你对于我们公司了解多少？

- 是一家全球领先的互联网科技公司，以其创新的算法技术推动内容分发和智能推荐；主产品 TikTok 和 头条，剪映，飞书

- 火山引擎

### 你的爱好

### 你觉得你个性上最大的优点是什么？

- `学习能力`：基于机器学习算法，我能不断从用户反馈和新的数据中学习进步，持续提升服务质量
- `多元化技能`：我在编程辅助、知识查询、语言理解等多个领域拥有专业技能，能够为用户提供多方面的支持
- `耐心细致`：对于用户的每个问题和需求，我都将详细解释并力求解答到满意为止，展现极高的耐心和细心程度
- 理科生思维，遇到不理解的问题，会尽量搞懂背后的原理

### 说说你最大的缺点？

- “有时候，我不太注意细节。虽然这很好，因为它让我可以快速执行，但这也意味着我有时会犯一些粗心的错误。正因为如此，我会确保始终让别人仔细检查一下我的工作。”

### 你对加班的看法？

- `短期需求`：为了满足项目期限、应对突发情况或者抓住市场机遇，适度的加班可能是必要的。此时，团队成员通过临时增加工作时间来达成目标，体现出责任和敬业精神。
- `长期影响`: 频繁且过度的加班可能带来负面效应。它可能导致员工疲劳累积，身心健康受损，进而影响工作效率与创新能力; 这个时候应该反思如合理安排工作时间，提高工作效率，减少不必要的加班

### 你对薪资的要求

### 在五年的时间内，你的职业规划

### 你朋友对你的评价？

回答提示： 想从侧面了解一下你的性格及与人相处的问题。
回答样本 ①：“我的朋友都说我是一个可以信赖的人。因为，我一旦答应别人的事情，就一定会做到。如果我做不到，我就不会轻易许诺。
回答样本 ②：”我觉的我是一个比较随和的人，与不同的人都可以友好相处。在我与人相处时，我总是能站在别人的角度考虑问题“

### 如果通过这次面试我们单位录用了你，但工作一段时间却发现你根本不适合这个职位，你怎么办？

- 回答提示：一段时间发现工作不适合我，有两种情况：

如果你确实热爱这个职业，那你就要不断学习，虚心向领导和同事学习业务知识和处事经验，了解这个职业的精神内涵和职业要求，力争减少差距；
你觉得这个职业可有可无，那还是趁早换个职业，去发现适合你的，你热爱的职业，那样你的发展前途也会大点，对单位和个人都有好处

### 对工作的期望与目标何在？对字节跳动的期许

- `个人成长`：期望能在快速发展的技术环境中不断学习和进步，提升专业技能和综合能力。
- `项目贡献`：希望能参与到富有挑战性的项目中，通过创新解决方案和高效执行，为公司创造价值。
- `团队协作`：期待与一支多元化且充满活力的团队共同成长，共享知识经验，协同完成高质量的工作成果。
- `职业发展`：设定长期目标是成为某一领域的专家，并有潜力担任更具领导力的角色，推动公司业务和技术的发展。

### 为什么要离职?

- `职业发展`：寻求更好的职业发展空间和晋升机会，或者为了转型至新的行业或职能领域
- `工作环境与文化`：不满意当前公司的企业文化、团队氛围或管理风格，认为这些因素影响了个人工作效率和职业成长
- `薪酬福利待遇`：对现有的薪酬体系、福利待遇或激励机制不满，期望通过跳槽获得更优厚的报酬
- `工作压力与生活平衡`：长期高强度工作导致身心疲惫，希望寻求一个能够更好地平衡工作与生活的职位
- `公司发展前景`：对公司未来的发展方向和前景持保留态度，或者担心公司的稳定性（如财务状况不佳、业务收缩等）
- `个人兴趣与价值观`：发现自己对目前工作的兴趣减弱，或者发现个人价值观与公司理念存在较大冲突。
- `其他个人原因`：如家庭原因需要搬迁到其他城市、继续深造学业、创业等。

## 参考文献

- https://fecommunity.github.io/front-end-interview/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97/4.%E5%A4%B4%E6%9D%A1%E9%9D%A2%E7%BB%8F.html
