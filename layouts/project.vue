<script setup lang="ts">
const route = useRoute()
const loading = ref<boolean>(false)

onMounted(() => {
  init()
})

async function init() {
  loading.value = true
  const projectId = String(route.params?.projectId) || ''
  const { setCurrentProject } = useProjects()
  await setCurrentProject(projectId)
  loading.value = false
}
</script>

<template>
  <v-app>
    <template v-if="loading">
      <v-progress-circular indeterminate color="#000" />
    </template>
    <template v-else>
      <LayoutProjectLayoutHeaderMenu class="project-layout__header" />
      <div class="project-layout__body">
        <LayoutProjectLayoutSideMenu />
        <slot />
      </div>
    </template>
  </v-app>
</template>

<style lang="scss">
.project-layout {
  &__body {
    display: flex;
    height: 100%;
    background-color: #f1f1f1;
  }
}
</style>
