# TODO

## npm package

- tslib
- unbuild
- rollup
- ramda
- esbuild
- spritesmith
-

> vue

- https://github.com/vuejs/core/blob/main/package.json

```json
{
  "esbuild-plugin-polyfill-node": "^0.3.0",
  "estree-walker": "^2.0.2",
  "jsdom": "^23.0.1",
  "magic-string": "^0.30.5",
  "markdown-table": "^3.0.3",
  "marked": "^11.0.1",
  "minimist": "^1.2.8",
  "prettier": "^3.1.1",
  "pretty-bytes": "^6.1.1",
  "pug": "^3.0.2",
  "puppeteer": "~21.6.0",
  "rimraf": "^5.0.5",
  "serve": "^14.2.1",
  "terser": "^5.22.0",
  "todomvc-app-css": "^2.4.3"
}
```

## principle

- 原子化 css
- Reduce 和 Transduce 的思想 Pointfree
- codegen
- IntersectionObserver API
- 依赖循环加载 https://www.ruanyifeng.com/blog/2015/11/circular-dependency.html
- https://www.ruanyifeng.com/blog/2015/05/require.html
- 模块联邦

## 你不知道的 JavaScript

- https://www.ruanyifeng.com/blog/2014/12/unicodejavascript.html

## interview

- 什么是 DOM 和 BOM？
- 如何判断一个对象是否属于某个类
- JS 模块加载器的轮子怎么造，也就是如何实现一个模块加载器？ https://www.zhihu.com/question/21157540
- 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？
- 为什么 0.1 + 0.2 != 0.3？如何解决这个问题？

- ⽂件上传如何做断点续传
- 表单可以跨域吗
- 介绍 http2.0
- 对 async、await 的理解，内部原理
- 介绍下 Promise，内部实现
- 介绍异步⽅案
- 如何处理异常捕获
- 介绍下 DFS 深度优先
- 发布-订阅和观察者模式的区别

## React

- Redux
- react-router
- Formik
- React Hook Form https://www.react-hook-form.com/

## 待读

- [ 对于非常规需求，如何在业务中巧妙的使用奇技淫巧 ](https://github.com/tnfe/awesome-blackmagic)
- [ 前端开发小技巧 ](https://github.com/phuocng/frontend-tips)
- [ 1KB 级别的小工具，更多看设计思想](https://github.com/xucz/awesome-1kb)
- [ 对开源框架的学习](https://github.com/KieSun/awesome-frontend-source-interpretation)
- [ 强烈建议学习 lodash 这种小而精的库 ](https://github.com/HeftyKoo/pocket-lodash)
- [ 常看常新的 jQuery](https://github.com/JsAaron/jQuery)
- [ low code 精选资源库](https://github.com/aliaszz/awesome-lowcode-component)
- [ less code/ no code 集合 ](https://github.com/dream2023/awesome-lesscode)
- [ 前端状态管理的聚合，可以横向对比下前端状态管理 ](https://github.com/tnfe/awesome-state)
- [ 高质量的有趣的前端项目](https://github.com/Wechat-ggGitHub/Awesome-GitHub-Repo)
- [ 前端技术书籍 ](https://github.com/jobbole/awesome-web-dev-books)
- [ 计算机方面基础、提升的经典之作 ](https://github.com/imarvinle/awesome-cs-books)
- [ JS 资源库 ](https://github.com/jobbole/awesome-javascript-cn)
- [ 云谦大佬整理的前端资源库 ](https://github.com/sorrycc/awesome-f2e-libs)
- [ uni-app 的汇总 ](https://github.com/aben1188/awesome-uni-app)
- [ 一个比较不错的 demo 小集合 ](https://github.com/BryanAdamss/fe-awesome-demos)
- [ roadmap 大杂烩 ](https://github.com/kamranahmedse/developer-roadmap)
- [ 之前提过的 JS 整洁之道 ](https://github.com/ryanmcdermott/clean-code-javascript)
- [ 30s 一道题，没事看看 ](https://github.com/30-seconds/30-seconds-of-code)
- [ airbnb 代码风格指南 ](https://github.com/airbnb/javascript)
- [ 每个程序员都应该知道的东西，不单独指前端开发 ](https://github.com/mtdvio/every-programmer-should-know)
- [ JS 的数据结构于算法 ](https://github.com/trekhleb/javascript-algorithms)
- [ node 最佳实践 ](https://github.com/goldbergyoni/nodebestpractices)

## leetcode

- 二叉树最近公共祖先节点
- 每次上 1 个台阶或 2 个台阶，求上 n 楼的方案问题
- 旋转链表:给定一个单链表，旋转链表，将链表每个节点向后移动 k 个位置，如果是尾节点，则把它移动到最前面；其中 k 是正数。要求：时间复杂度 O(n)，空间复杂度 O(1)
- 将一个数组的所有元素向右移动若干单位，并把数组右侧溢出的元素填补在数组左侧的空缺中，这种经操作称为数组的循环平移
- 给你一个不小于 3 个元素的数组 a，已知 a 是从一个有序且不包含重复元素的数组平移 k(k 大于等于 0 且小于数组长度)个单位而来；请写一个函数，输入 int 类型数组 a，返回 k 的值。例如，对于数组 a = {5, 1, 2, 3, 4}，它由有序数组 {1, 2, 3, 4, 5} 循环平移 1 个单位而来，因此 k = 1。
- N 个数，找第 K 大数
- 找出两个子 view 最近的共同父 view（算法）
- 给一个数组，求如何划分数组，使得 abs（sum【A】 - sum【B】）最小
- 给个有序数组，将数组非重复部分排在前面，不占用额外空间，输出数组
- 红黑树的特点是什么，什么情况下使用 hashmap，什么情况下使用红黑树
- 一个包含 0-9 的数组，只有一个数字是两次出现，如何在 O(n)时间，O(1)空间下找出这个数字
- 一个 Int 型是有 4 个字节，a = 1， b = 2，怎样不使用第三个变量，使得 a，b 变量交换值。

- 给定一个二叉树和一个数字 n，判断二叉树中是否有一个路径上的数字之和等于给定的数字 n
- 二叉树翻转 （递归和迭代）
- 两条链表是否含有交叉
- 写一个迭代器
- 100 万个 16 位整数，内存不限，找出 Top K。
- 找出一个数组的长度 Top2 的连续升序子数组，并按长度降序输出
- 例如：输入：[2, 1, 4, 5, 8, 3, 7, 10, 2, 5], k = 2 输出：[1, 4, 5, 8], [3, 7, 10]
- 给定一个序列，求最长递增子序列有几个（动态规划）
- 算法写个 3sum(leetcode)
- 排序算法
- 实现一个单链表反转

- 算法整数反转
- 判断两个二叉树是否相等
- 写一个二叉树的层序遍历
- N 个数，找第 K 大数，经典题，leetcode 原题
- 一颗二叉树从右边看过去，把看到的节点打印出来
- 一个乱序的整型数组，输出数组中没出现的最小的整数
- 一个正整数数组 找出连续和为 K 的整数倍的最短序列
- 求 double 类型的 n 次方，double pow(double base ， int n)  注意边界问题
- 实现单链表的逆序，普通的修改链接指针的逆序方式之外是否还有其他方式实现逆序。
- 只描述思路：10T 大小的文件，每行为一个单词，找出词频最高的前 k 个单词
- 求二叉树的直径，即一个叶子节点到另一个叶子节点的最大长度
- 给一个数组，用二分法查找某个元素是否在里面，在就返回 0，不在就返回-1

- 倒置二叉树
- 二叉树遍历
- 实现一个单例类
- 二叉排序树实现插入算法
- 手写一个智能指针实现，线程安全的智能指针
- 找出一个字符串 s 包含字符串 t 的最小重复字符串
- 一个 n 的数组，有一些随机数据，怎么抽出 m 长度的数据，保证数组的数据唯一，方法可能有很多，面试官会探讨最优方法
- 给一个任意整数组，剔除一个元素后，得出最大乘积例如：[4]int{2,3,4,-4}   最大乘积 24
- 给定一个整数数组，使得去除一个数后，剩余数相乘最大
- 怎么从一对数里面最快找到最大值和最小值
- 给出一个字符串 N “ABBCDB”（大小英文字母组成） ，按照一下任意一个规则，一：从头部删除一个字母，并追加到新字符串尾；二：从尾删除一个字母，并追加到新字符串尾；期望最后得到一个字典排序最小的字符串
- 有一个任意的整形数组，[]int，从数组取出任意一个元素是的它是符合下面条件的，一：它的左边都比它小，二它的右边都比它大。
  10000 个整数的升序数组，无重复数，找出最接近目标数的下标
