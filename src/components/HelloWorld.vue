<template>
  <div v-for="(frontMatter, i) in frontMatters" v-bind:key="i">
    {{ frontMatter.title }}
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue"

export default {
  // // components: {
  // //   ContentMarkdown: VueComponent.render(),
  // // },
  async setup() {
    console.log("setup")
    let frontMatters = []
    let markdownFiles = Object.keys(import.meta.glob("../contents/*.md"))
    for (let i = 0; i < markdownFiles.length; i++) {
      let { attributes } = await import(
        /* @vite-ignore */
        markdownFiles[i]
      )
      console.log(attributes)
      console.log("after setup")
      frontMatters.push(attributes)
      console.log(frontMatters)
    }
    console.log("frontMatters")
    console.log(frontMatters)
    return { frontMatters: reactive(frontMatters) }
  },
  // data() {
  //   return {
  //     attributes,
  //     html,
  //   }
}
</script>
