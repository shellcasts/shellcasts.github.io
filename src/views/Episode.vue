<template>
  <div v-html="html"></div>
</template>
<script>
import { reactive } from "vue"
import { useRouter, useRoute } from 'vue-router'

export default {

  async setup(props, ctx) {
    let markdownFiles = Object.keys(import.meta.glob("../contents/*.md"))
      const route = useRoute()
      console.log(route.params.id)
      console.log(markdownFiles[route.params.id - 1])

      let { html } = await import(
        /* @vite-ignore */
        markdownFiles[route.params.id - 1]
      )
    return { html: reactive(html) }
  },
}
</script>
