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

export default {
  components: { CastCard },

  async setup() {
    let frontMatters = []
    let markdownFiles = Object.keys(import.meta.glob("../contents/*.md"))
    for (let i = 0; i < markdownFiles.length; i++) {
      let { attributes } = await import(
        /* @vite-ignore */
        markdownFiles[i]
      )
      frontMatters.push(attributes)
    }
    return { frontMatters: reactive(frontMatters) }
  },
}
</script>
