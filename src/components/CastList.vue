<template>
  <div class="grid grid-cols-1 gap-4 max-w-prose">
    <cast-card
      v-for="(frontMatter, i) in frontMatters"
      v-bind:key="i"
      :frontMatter="frontMatter"
      :index="i + 1"
    />
  </div>
</template>
<script>
import { reactive } from "vue"
import CastCard from "./CastCard.vue"

// let markdown = 'test1'
// import {attributes} from `@/contents/${markdown}.md`
export default {
  components: { CastCard },

  async setup() {
    let frontMatters = []
    let markdownFiles = Object.keys(import.meta.glob("../contents/*.md"))
    for (let i = 0; i < markdownFiles.length; i++) {
      let basename = markdownFiles[i].match(/.*\/+(.*)\.md/)[1]
      let { attributes } = await import(`../contents/${basename}.md`)
      frontMatters.push(attributes)
    }

    return { frontMatters: reactive(frontMatters) }
  },
}
</script>
