export const data = JSON.parse("{\"key\":\"v-744e35e2\",\"path\":\"/vue/\",\"title\":\"hello world\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"\",\"slug\":\"\",\"children\":[]}],\"git\":{\"updatedTime\":1663931721000,\"contributors\":[{\"name\":\"leirp\",\"email\":\"leiruipeng1532@hanweb.com\",\"commits\":2},{\"name\":\"root\",\"email\":\"root@leirp.localdomain\",\"commits\":1}]},\"filePathRelative\":\"vue/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
