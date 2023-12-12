# vdom 解读

## 写法差异

```javascript
// vue2的写法
// render (h) {
//   return h('div', {
//     attr: {
//       id: 'foo'
//     },
//     on: {
//       click: this.onclick
//     }
//   }, 'hello')
// }

// vue3
import { h } from "vue";

const APP1 = {
  render() {
    return h(
      "div",
      {
        id: "foo",
        onClick: this.onClick,
      },
      "hello"
    );
  },
};

// slot 渲染
const APP2 = {
  render() {
    const slot = this.$slots.default ? this.$slot.default() : [];
    slot.map((vnode) => {
      return h("div", [vnode]);
    });
  },
};
```

## vue3 和 vue2 带来的优化

- 以 on 开头在编译过程中默认绑定为监听事件（vue 认为这是最好的的处理方式，不用关注是应该绑定在 attribute 还是其他）
- vue2 和 vue3 的差异，在渲染函数式可以全局导入，
- h 不需要在 render 上传入；解决 vue2 大的 render 函数拆分问题；vue3 可以随意拆分块
- props 扁平化传入; vue 判断 属性是否在原生 DOM 属性上，存在的话设置为 property，不存在的话设置为 attribute
- vue dom 的灵感来源 snabbdom

## 最小的 vdom 结构

```html
<!-- 最小的vdom结构 -->
<style>
  .red {
    color: red;
  }
</style>
<div id="app"></div>

<script>
  // 渲染函数
  function h(tag, props, children) {
    return {
      tag,
      props,
      children,
    };
  }

  // 挂载函数
  function mount(vnode, container) {
    const el = document.createElement(vnode.tag);

    if (vnode.props) {
      for (const key in vnode.props) {
        const value = vnode.props[key];
        el.setAttribute(key, value);
      }
    }

    // children
    if (vnode.children) {
      if (typeof vnode.children === "string") {
        el.textContent = vnode.children;
      } else {
        vnode.children.forEach((child) => {
          mount(child, el);
        });
      }
    }
    container.appendChild(el);
  }

  const vdom = h("div", { class: "red" }, [h("span", null, "hello")]);

  mount(vdom, document.getElementById("app"));
</script>
```

## patch 算法

```html
<!-- patch算法 -->
<style>
  .red {
    color: red;
  }
  .green {
    color: green;
  }
</style>
<div id="app"></div>

<script>
  // 渲染函数
  function h(tag, props, children) {
    return {
      tag,
      props,
      children,
    };
  }

  // 挂载函数
  function mount(vnode, container) {
    const el = (vnode.el = document.createElement(vnode.tag));

    if (vnode.props) {
      for (const key in vnode.props) {
        const value = vnode.props[key];
        el.setAttribute(key, value);
      }
    }

    // children
    if (vnode.children) {
      if (typeof vnode.children === "string") {
        el.textContent = vnode.children;
      } else {
        vnode.children.forEach((child) => {
          mount(child, el);
        });
      }
    }
    container.appendChild(el);
  }

  const vdom = h("div", { class: "red" }, [h("span", null, "hello")]);

  mount(vdom, document.getElementById("app"));

  // diff算法
  function patch(n1, n2) {
    if (n1.tag === n2.tag) {
      // 当这个节点从新节点变成旧的节点，携带的是真实的dom到未来的快照
      const el = (n2.el = n1.el);
      // props
      const oldProps = n1.props || {};
      const newProps = n2.props || {};

      for (const key in newProps) {
        const oldValue = oldProps[key];
        const newValue = newProps[key];
        if (newValue !== oldValue) {
          el.setAttribute(key, newValue);
        }
      }

      for (const key in oldProps) {
        if (!(key in newProps)) {
          el.removeAttribute(key);
        }
      }

      // children
      const oldChildren = n1.children;
      const newChildren = n2.children;
      if (typeof newChildren === "string") {
        if (typeof oldChildren === "string") {
          if (newChildren !== oldChildren) {
            el.textContent = newChildren;
          }
        } else {
          el.textContent = newChildren;
        }
      } else {
        if (typeof oldChildren === "string") {
          el.innerHtml = "";
          newChildren.forEach((child) => {
            mount(child, el);
          });
        } else {
          // Vue 源码对这里进行了优化，这里为了方便理解，直接判断各个节点是否相同
          const commonLength = Math.min(oldChildren.lenght, newChildren.lenght);

          for (let i = 0; i < commonLength; i++) {
            patch(oldChildren[i], newChildren[i]);
          }
          if (newChildren.lenght > oldChildren.lenght) {
            newChildren.slice(oldChildren.lenght).forEach((child) => {
              mount(child, el);
            });
          } else if (newChildren.lenght < oldChildren.lenght) {
            oldChildren.slice((child) => {
              el.removeChild(child.el);
            });
          }
        }
      }
    } else {
      // replace
    }
  }

  const vdom2 = h("div", { class: "green" }, [h("span", null, "changed")]);

  patch(vdom, vdom2);
</script>
```
