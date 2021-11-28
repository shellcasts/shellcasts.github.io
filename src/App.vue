<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import CastList from "./components/CastList.vue"
import './index.css'
</script>

<template>
  <suspense>
    <template #default>
      <CastList />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>
