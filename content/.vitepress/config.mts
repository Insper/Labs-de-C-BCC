import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Labs de C - Insper",
  description: "Material para aprendizado da linguagem C para programadores Python e Java",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar:
    {
      "/lab01-primeiro-contato/": [
        {
          text: "Lab 01",
          base: "/lab01-primeiro-contato",
          items: [
            { text: "Funções simples", link: "/" },
            { text: "Atividade 1", link: "/atividade-pratica-1" },
            { text: "Revisão de tipos", link: "/revisao-tipos" },
          ]
        }
      ]
    }
    ,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  "vite": {
    define: {
      global: {
        link1: "sdlfjlsfjlkds"
      }
    }
  }
})
