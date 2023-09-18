<script setup lang="ts">
onMounted(async () => {
  await updateProjects()
})

async function updateProjects() {
  const { setProjects } = useProjects()
  await setProjects()
}
</script>

<template>
  <v-app class="home-layout">
    <div class="home-layout__contents">
      <LayoutHomeLayoutSideMenu class="home-layout__header" />
      <slot />
    </div>
  </v-app>
</template>

<style lang="scss">
.home-layout {
  height: 100%;
  &__contents {
    display: flex;
    height: 100%;
    background-color: #ececec;
  }
}
</style>
