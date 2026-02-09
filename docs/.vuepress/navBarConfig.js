module.exports = [
  {
    text: 'JavaScript',
    children: [
      {
        text: "基础",
        children: [
          {
            text: 'JavaScript',
            link: '/JavaScript/',
            // 该元素将一直处于激活状态
            activeMatch: '^/JavaScript',
          },
          {
            text: 'TypeScript',
            link: '/TypeScript/',
            // 该元素将一直处于激活状态
            activeMatch: '^/TypeScript',
          },
        ],
      },
      {
        text: "框架",
        children: [
          {
            text: 'VUE',
            link: '/vue/',
            activeMatch: '^/vue/',
          },
          {
            text: 'React',
            link: '/react/',
          },
          {
            text: 'Nest',
            link: '/Nest/',
          },
        ],
      }
    ],
  },
  {
    text: 'Tools',
    children: [
      {
        text: 'Git',
        link: '/git/',
        // 该元素将一直处于激活状态
        activeMatch: '^/JavaScript',
      },
      {
        text: 'WebPack',
        link: '/webpack/',
        // 该元素将一直处于激活状态
        // activeMatch: '^/JavaScript',
      },
    ]
  },

]