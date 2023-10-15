import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Naparte Blog",
  description: "A VitePress Site",
  base: "/verce-blog/",
  outDir: "./dist",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "总览", link: "/home/demo/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/home/demo/markdown-examples" },
          { text: "Runtime API Examples", link: "/home/demo/api-examples" },
        ],
      },
      {
        text: "Blog",
        items: [
          { text: "Prompt AI ", link: "/home/ai/gpt_prompt" },
          { text: "文献索引", link: "/home/literatureabstract" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
