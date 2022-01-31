<template>
  <img :src="frontMatter.image" style="max-height: 10rem; max-width: 10rem" />
  <article class="prose lg:prose-xl">
    <div v-html="html"></div>
  </article>
</template>
<script>
import { reactive } from "vue"
import { useRouter, useRoute } from "vue-router"

export default {
  async setup(props, ctx) {
    const route = useRoute()

    let markdownFiles = Object.keys(import.meta.glob("../contents/*.md"))
    let basename = markdownFiles[route.params.id - 1].match(/.*\/+(.*)\.md/)[1]
    let { attributes, html } = await import(`../contents/${basename}.md`)

    return { frontMatter: reactive(attributes), html: reactive(html) }
  },
}
</script>
