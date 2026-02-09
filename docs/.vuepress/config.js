// const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')

module.exports = {
    lang: 'zh-CN',
    title: 'leirp',
    description: '这是我的第一个 VuePress 站点',
    markdown:{
      

    },
    plugins: [
      // backToTopPlugin(),
      nprogressPlugin(),
      
    ],

    theme: defaultTheme({
      navbar: require("./navBarConfig"),
      sidebar: {
        '/JavaScript/':[{
          text: "JavaScript",
          children: [
            '循环及遍历',
            "函数及其作用域",
            "面向对象",
            "Promise与异步",
            "BOM",
          ]
        }],
        '/vue/':[{
          text: "VUE",
          children: ["初识VUE","模板语法","数据绑定原理","数据响应性","列表渲染","条件渲染","表单输入绑定","事件绑定","计算属性","侦听器"] 
        }],
        '/TypeScript/':[{
          text: "TypeScript",
          children: ['类型','接口','函数'] 
        }],
        '/React/':[{
          text: 'React',
          children: ['React基础']
        }],
        '/Nest/':[{
          text: 'Nest',
          children: ['介绍','控制器','配置','管道','守卫','应用上下文','CLI',]
        }]
      }
    
    }),
  }