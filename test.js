// class MyInfo extends HTMLElement {
//   constructor() {
//     super();

//     var image = document.createElement("img");
//     image.src =
//       "https://github.com/Naparte/verce-blog/blob/main/avatar.png?raw=true";
//     image.width = 40;
//     image.classList.add("image");

//     var container = document.createElement("div");
//     container.classList.add("container");

//     var name = document.createElement("p");
//     name.classList.add("name");
//     name.innerText = "Name: Naparte";

//     var email = document.createElement("p");
//     email.classList.add("email");
//     email.innerText = "Email: Naparte@163.com";

//     var button = document.createElement("button");
//     button.classList.add("button");
//     button.innerText = "Follow";

//     container.append(name, email, button);
//     this.append(image, container);
//   }
// }
// window.customElements.define("my-info", MyInfo);

class MyInfo extends HTMLElement {
  constructor() {
    super();

    var templateElem = document.getElementById("my-info-template");
    var content = templateElem.content.cloneNode(true);

    //  :host CSS 伪类选择内部使用了该 CSS 的影子 DOM（shadow DOM） 的影子宿主（shadow host）——换句话说，这允许你从其影子 DOM 内部选择自定义元素
    // https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(content);

    // 添加操作事件
    this.$button = shadowRoot.querySelector("button");
    this.$button.addEventListener("click", () => {
      alert("click");
    });
  }
}

window.customElements.define("my-info", MyInfo);
