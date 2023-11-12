import { defineConfig } from "vitepress";

import { sidebar } from "./getSidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Naparte Blog",
  description: "A VitePress Site",
  base: "/verce-blog/",
  outDir: "./dist",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "总览", link: "/home/demo/markdown-examples" },
    ],

    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
