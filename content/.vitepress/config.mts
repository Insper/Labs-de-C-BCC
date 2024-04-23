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
          base: "/lab01-primeiro-contato/",
          items: [
            { text: "Início", link: "/" },
            { text: "Exercícios de código", link: "/" },
            { text: "Revisão de tipos", link: "/" },
            { text: "Exercícios de tipos: simulação e código", link: "/" },
            
          ]
        }
      ]
    }
    ,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
