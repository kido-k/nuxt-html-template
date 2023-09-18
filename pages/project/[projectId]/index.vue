<script setup lang="ts">
definePageMeta({
  layout: 'project',
  middleware: 'auth',
})
</script>

<template>
  <div class="project-page">
    <client-only>
      <PageProjectPageLayout />
    </client-only>
  </div>
</template>

<style lang="scss" scoped>
.project-page {
  width: 100%;
  padding: 40px;
}
</style>
