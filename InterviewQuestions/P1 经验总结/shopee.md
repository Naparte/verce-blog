# shopee

## shopee 金融一面

1. 了解 http？说一下 HTTPs 认证过程，
2. referrer，host，origin 有什么区别

- Referer 提供了请求来源的具体页面地址(主要用于统计流量来源、防盗链、防止跨站请求伪造（CSRF）攻击等场景)
- Host 标识了请求的目标主机和端口，`必备字段`(服务器通常会根据 Host 头部来区分同一 IP 地址上的多个虚拟主机，确保将请求路由到正确的网站)
- Origin 则是在跨域请求中指明请求的原始安全上下文(主要服务于同源策略的安全机制，服务端可以根据这个头部信息判断请求是否来自合法的源，从而决定是否允许跨域请求)

3. mysql 知道怎么操作数据库么
4. ngnix 如何配置 304
5. 说下 https，证书是如何校验的

- `客户端发送 https 请求`，把自身支持的秘钥算法套件（SSL 指定版本、加密组件列表）发送给服务器
- 服务器判断自身是否支持该算法套件，`如果支持则返回证书信息`(本质为公钥，包含了证书颁发机构，网址，过期时间等) ，否则断开连接，
- `客户端解析证书`(通过 TLS 协议来完成)，验证证书是否有效。如果异常，则会提示是否安装证书，常见的就是浏览器搜索栏左侧出现“X”告警按钮等。
- 如果证书有效、或者是授信安装证书后，`开始传送加密信息`(用证书加密后的随机值，供加解密使用)
- `服务端通过私钥解密加密信息`，得到客户端发送来的随机值，然后把内容通过该值进行对称加密。这样一来，除非知道私钥，否则是无法获取加密内容的。
- 服务端返回加密后的内容
- 客户端通过前面提到的随机值对加密信息进行解密

6. 看代码输出

```js
function Person() {
  this.name = "a";
}

Person.prototype.id = "di";
Person.prototype.name = "name";

let p = new Person();

for (let key in p) {
  console.log(p[key]); // 打印几次
}

delete p.name;

for (let key in p) {
  console.log(p[key]); // 打印几次
}
```

```js
new Promise((resole, reject) => {
  console.log(1);

  resole(true);

  console.log(2);

  throw new Error("error");

  reject();
})
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log(true);
  });
```

7. 写一个请求并发控制 addTask 函数，同时只有 5 个并发请求，同时可以取消任意一个
8. 实现一个大数相加的方法

## 一面

1. 单向链表输出倒数第 K 个元素
2. 看代码输出结果（考察变量、函数提升）
3. 看代码输出结果（考察异步代码先后顺序）
4. 手写 instanceof 关键字
5. 手写 Promise
6. react 中为什么不能在 for 循环、if 语句里使用 hooks，说下 react hooks 实现原理。
7. 说下 react fiber。
8. 看你之前做过 RN 开发，说下 RN 的原理。
9. 说下输入一个 url 地址的全过程。
10. http 的缓存策略。
11. 说下 https，证书是如何校验的？
12. 说下 http2，你觉得阻碍 http2 发展的问题是什么？
13. 算法题。跳格子问题，假设一次只能跳一个格子和两个格子，N 个格子有多少种跳法？

## 二面

1. 自我介绍
2. 为什么要离职？
3. 对你的项目经历中 RN 做的 app 挺感兴趣的，你能详细说下这个项目吗？
4. RN 中原生和 js 端是如何通信的？你说后面使用 JSI 了，你能说下 JSI 的实现原理吗？
5. 如果要你对这个 app 进行性能优化，你有哪些办法（面试官问了三次还有其他办法吗？）

- 代码层面，按照 react 的优化，减少 re-render 次数。图片加载用 react-native-fast-image,页面初始化的逻辑使用 InteractionManager.runAfterInteractions。去掉无用的 View 层。
- 进行分包加载，启动时只加载启动页面 bundle，二级及更深页面等访问到再加载。
- 一些复杂的控件，写原生模块，比如日期选择、下拉选择、级联、播放器等。

6.  你们的 RN 热更新服务是怎么做的？热更新原理是什么？你们的热更新策略怎么做的？

- 客户端用的微软的 code-push,服务端用的 code-push-server。
- 热更新原理就是 app 每次启动会请求热更新服务器，对比下本地 bundle 版本和服务器的 bundle 版本，如果版本不一致，就会根据配置的更新策略下载、更新 bundle,然后重新 reload bundle。
- 我们就是在检查到新的 bundle 后，会弹窗强制更新。

7. 设计一个 RN 热更新服务，需要考虑哪些地方？

bundle 体积大的问题。打包的时候需要进行分包，使用增量更新，减少下载体积。
用户的网络不稳定、网速差问题。需要用 CDN 加速，支持断点续传。

- 安全性问题。
  - bundle 被中间人劫持篡改。使用 https 下载，并按照 https 的加密思路，对
  - bundle 用 hash 算法进行签名，然后 app 端检验签名是否被篡改。
  - bundle 下载地址被暴力攻击。检查 User-Agent,只允许手机设备下载，记录设备 id，在一定时间内限制下载次数。 8. 你有什么要问我的吗？

## 参考资料

- https://cloud.tencent.com/developer/article/1731552
- https://juejin.cn/post/7070881399166730271
