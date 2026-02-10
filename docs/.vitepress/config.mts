import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "study blog",
  description: "我的学习博客，包含Java、JavaScript、React、TypeScript、Vue、小程序等技术学习笔记",
  head: [
    ['link', { rel: 'stylesheet', href: '/.vitepress/theme/custom.css' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '客户端',
        items: [
          {
            text: '暂无博客',
            link: '/',
            disabled: true
          }
        ]
      },
      {
        text: '前端',
        items: [
          {
            text: '语言',
            items: [
              { text: 'JavaScript', link: '/JavaScript/' },
              { text: 'TypeScript', link: '/TypeScript/' }
            ]
          },
          {
            text: '框架',
            items: [
              { text: 'React', link: '/React/' },
              { text: 'Vue', link: '/vue/' },
              { text: '小程序', link: '/小程序/' }
            ]
          }
        ]
      },
      {
        text: '后端',
        items: [
          {
            text: '语言',
            items: [
              { text: 'Java', link: '/Java/' }
            ]
          },
          {
            text: '框架',
            items: [
              { text: 'SpringBoot', link: '/Java/SpringBoot/SpringBoot.md' },
              { text: 'NestJS', link: '/nestjs/介绍.md' }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/Java/': [
        {
          text: 'Java学习笔记',
          link: '/Java/README.md'
        },
        {
          text: 'Java基础',
          items: [
            { text: '数据类型', link: '/Java/Java基础/数据类型.md' },
            { text: '数组', link: '/Java/Java基础/数组.md' },
            { text: '面向对象', link: '/Java/Java基础/面向对象.md' },
            { text: '集合框架', link: '/Java/Java基础/集合框架.md' },
            { text: 'IO', link: '/Java/Java基础/IO.md' },
            { text: 'Maven', link: '/Java/Java基础/Maven.md' },
            { text: '工具类', link: '/Java/Java基础/工具类.md' }
          ]
        },
        {
          text: 'SpringBoot',
          items: [
            { text: 'SpringBoot', link: '/Java/SpringBoot/SpringBoot.md' },
            { text: 'Spring Web', link: '/Java/SpringBoot/Spring Web.md' },
            { text: 'Mybatis', link: '/Java/SpringBoot/Mybatis.md' },
            { text: 'Spring Security', link: '/Java/SpringBoot/Spring Security.md' },
            { text: '核心特性', link: '/Java/SpringBoot/核心特性.md' },
            { text: '全局异常处理', link: '/Java/SpringBoot/全局异常处理.md' },
            { text: '日志配置', link: '/Java/SpringBoot/日志配置.md' },
            { text: '过滤器与拦截器', link: '/Java/SpringBoot/过滤器与拦截器.md' }
          ]
        }
      ],
      '/JavaScript/': [
        {
          text: 'JavaScript学习笔记',
          link: '/JavaScript/README.md'
        },
        {
          text: 'JavaScript',
          items: [
            { text: 'README', link: '/JavaScript/README.md' },
            { text: '函数及其作用域', link: '/JavaScript/函数及其作用域.md' },
            { text: '循环与遍历', link: '/JavaScript/循环与遍历.md' },
            { text: '面向对象', link: '/JavaScript/面向对象.md' },
            { text: 'DOM', link: '/JavaScript/DOM.md' },
            { text: 'BOM', link: '/JavaScript/BOM.md' },
            { text: 'Promise与异步', link: '/JavaScript/Promise与异步.md' },
            { text: 'axios', link: '/JavaScript/axios.md' },
            { text: 'RxJs', link: '/JavaScript/RxJs.md' }
          ]
        }
      ],
      '/React/': [
        {
          text: 'React学习笔记',
          link: '/React/README.md'
        },
        {
          text: 'React',
          items: [
            { text: 'React基础', link: '/React/React基础.md' },
            { text: 'JSX', link: '/React/JSX.md' },
            { text: '组件化', link: '/React/组件化.md' },
            { text: '事件处理', link: '/React/事件处理.md' },
            { text: '生命周期', link: '/React/生命周期.md' },
            { text: 'API', link: '/React/API.md' },
            { text: 'HOOK', link: '/React/HOOK.md' },
            { text: 'redux', link: '/React/redux.md' },
            { text: 'Untitled', link: '/React/Untitled.md' }
          ]
        }
      ],
      '/TypeScript/': [
        {
          text: 'TypeScript学习笔记',
          link: '/TypeScript/README.md'
        },
        {
          text: 'TypeScript',
          items: [
            { text: 'README', link: '/TypeScript/README.md' },
            { text: '类型', link: '/TypeScript/类型.md' },
            { text: '接口', link: '/TypeScript/接口.md' },
            { text: '类', link: '/TypeScript/类.md' },
            { text: '函数', link: '/TypeScript/函数.md' },
            { text: '泛型', link: '/TypeScript/泛型.md' }
          ]
        }
      ],
      '/vue/': [
        {
          text: 'Vue学习笔记',
          link: '/vue/README.md'
        },
        {
          text: 'Vue',
          items: [
            { text: 'README', link: '/vue/README.md' },
            { text: '初识VUE', link: '/vue/初识VUE.md' },
            { text: '模板语法.md', link: '/vue/模板语法.md' },
            { text: '动态绑定属性', link: '/vue/3. 动态绑定属性.md' },
            { text: '事件监听', link: '/vue/4 事件监听.md' },
            { text: '条件判断于遍历', link: '/vue/5. 条件判断于遍历.md' },
            { text: 'vue 实例的其他属性', link: '/vue/6. vue 实例的其他属性.md' },
            { text: '组件化', link: '/vue/7 组件化.md' },
            { text: '路由', link: '/vue/8. 路由.md' },
            { text: '状态管理', link: '/vue/9. 状态管理.md' },
            { text: '组合式API', link: '/vue/10. 组合式API.md' },
            { text: '数据绑定原理', link: '/vue/数据绑定原理.md' },
            { text: '数据响应性', link: '/vue/数据响应性.md' },
            { text: '计算属性', link: '/vue/计算属性.md' },
            { text: '侦听器', link: '/vue/侦听器.md' },
            { text: '条件渲染', link: '/vue/条件渲染.md' },
            { text: '列表渲染', link: '/vue/列表渲染.md' },
            { text: '表单输入绑定', link: '/vue/表单输入绑定.md' },
            { text: '事件绑定', link: '/vue/事件绑定.md' }
          ]
        }
      ],

      '/小程序/': [
        {
          text: '小程序学习笔记',
          link: '/小程序/README.md'
        },
        {
          text: '小程序',
          items: [
            { text: '起步', link: '/小程序/起步.md' },
            { text: '生命周期', link: '/小程序/生命周期.md' },
            { text: '组件', link: '/小程序/组件.md' }  
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
