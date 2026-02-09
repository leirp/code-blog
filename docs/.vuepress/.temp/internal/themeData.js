export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"JavaScript\",\"children\":[{\"text\":\"基础\",\"children\":[{\"text\":\"JavaScript\",\"link\":\"/JavaScript/\",\"activeMatch\":\"^/JavaScript\"},{\"text\":\"TypeScript\",\"link\":\"/TypeScript/\",\"activeMatch\":\"^/TypeScript\"}]},{\"text\":\"框架\",\"children\":[{\"text\":\"VUE\",\"link\":\"/vue/\",\"activeMatch\":\"^/vue/\"},{\"text\":\"React\",\"link\":\"/react/\"}]}]},{\"text\":\"Tools\",\"children\":[{\"text\":\"Git\",\"link\":\"/git/\",\"activeMatch\":\"^/JavaScript\"},{\"text\":\"WebPack\",\"link\":\"/webpack/\"}]}],\"sidebar\":{\"/JavaScript/\":[{\"text\":\"JavaScript\",\"children\":[\"循环及遍历\",\"函数及其作用域\",\"面向对象\",\"Promise与异步\",\"BOM\"]}],\"/vue/\":[{\"text\":\"VUE\",\"children\":[\"初识VUE\",\"模板语法\",\"数据绑定原理\",\"数据响应性\",\"列表渲染\",\"条件渲染\",\"表单输入绑定\",\"事件绑定\",\"计算属性\",\"侦听器\"]}],\"/TypeScript/\":[{\"text\":\"TypeScript\",\"children\":[\"类型\",\"接口\",\"函数\"]}],\"/React/\":[{\"text\":\"React\",\"children\":[\"React基础\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
