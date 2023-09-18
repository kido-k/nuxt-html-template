<script setup lang="ts">
const { getCurrentProject } = useProjects()

const currentProject = computed(() => {
  return getCurrentProject()
})

function transitionHome() {
  navigateTo({
    path: '/',
  })
}
</script>

<template>
  <v-layout class="project-layout-header">
    <v-layout style="align-items: center">
      <p class="project-layout-header__logo" @click="transitionHome()">
        HTML Editor
      </p>
      <p class="project-layout-header__project-name">
        {{ currentProject?.name }}
      </p>
    </v-layout>

    <v-btn icon size="small" variant="flat">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-layout>
</template>

<style lang="scss">
.project-layout-header {
  width: 100%;
  padding: 8px 16px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 50%);
  z-index: 10;
  &__logo {
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }
  &__button {
    width: 40px;
    margin: 16px 0;
  }
  &__project-name {
    margin: 0 0 0 48px;
    font-weight: bold;
  }
}
</style>
