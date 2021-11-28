<template>
  <ul
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
    v-for="(frontMatter, i) in frontMatters"
    v-bind:key="i"
  >
    <cast-card :frontMatter="frontMatter" />
  </ul>
</template>
<script>
import { reactive } from "vue"
import CastCard from "./CastCard.vue"

export default {
  components: { CastCard },

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
}
</script>
