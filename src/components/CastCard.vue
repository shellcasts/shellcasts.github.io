<script>
export default {
  props: {
    frontMatter: Object,
    index: Number,
  },
}
</script>

<template>
  <div
    class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200"
  >
    <img :src="frontMatter.image" class="max-h-10 mr-4" style="max-height: 2.5rem; max-width: 2.5rem;" />
    <router-link :to="`/casts/${index}`">
      <dl
        class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center"
      >
        <div class="flex">
          <dt class="sr-only">
            Title
          </dt>
          <dd class="leading-6 font-medium text-black">
            {{ frontMatter.title }}
          </dd>
        </div>
        <div>
          <dt class="sr-only">Category</dt>
          <dd
            class="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4"
          >
            {{ frontMatter.description }}
          </dd>
        </div>
        <div class="col-start-2 row-start-1 row-end-3">
          <dt class="sr-only">Users</dt>
          <dd
            class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2"
          >
            <!-- <img x-for="user in item.users" :src="user.avatar" :alt="user.name" width="48" height="48" class="w-7 h-7 rounded-full bg-gray-100 border-2 border-white" /> -->
          </dd>
        </div>
      </dl>
    </router-link>
  </div>
</template>
