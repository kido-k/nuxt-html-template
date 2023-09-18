<script setup lang="ts">
definePageMeta({
  layout: 'home',
  middleware: 'auth',
})

const { getProjects } = useProjects()

const projects = computed(() => {
  return getProjects()
})
</script>

<template>
  <v-container class="top-page">
    <client-only>
      <page-home-page-projects :projects="projects" />
    </client-only>
  </v-container>
</template>

<style lang="scss" scoped>
.top-page {
  max-width: 1200px;
  margin: 60px auto 0 auto;
}
</style>
