<script setup lang="ts">
const { getCurrentProject } = useProjects()
const { setCanvas } = useCanvas()

const currentProject = computed(() => {
  return getCurrentProject()
})

function transitionHome() {
  navigateTo({
    path: '/',
  })
}

function changeCanvasSize(width: number, height: number) {
  setCanvas({ width, height })
}
</script>

<template>
  <header class="project-layout-header">
    <v-layout class="project-layout-header__project">
      <v-layout style="align-items: center">
        <p class="project-layout-header__logo" @click="transitionHome()">
          HTML Editor
        </p>
        <p class="project-layout-header__project-name">
          {{ currentProject?.projectName }}
        </p>
      </v-layout>

      <v-btn icon size="small" variant="flat">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-layout>
    <v-divider />
    <v-layout class="project-layout-header__controller">
      <v-btn icon variant="flat" @click="changeCanvasSize(1280, 0)">
        <v-icon>mdi-monitor</v-icon>
      </v-btn>
      <v-btn icon variant="flat" @click="changeCanvasSize(768, 0)">
        <v-icon>mdi-tablet</v-icon>
      </v-btn>
      <v-btn icon variant="flat" @click="changeCanvasSize(480, 0)">
        <v-icon>mdi-cellphone</v-icon>
      </v-btn>
    </v-layout>
  </header>
</template>

<style lang="scss">
.project-layout-header {
  width: 100%;
  padding: 0 16px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 50%);
  z-index: 10;
  &__project {
    justify-content: center;
    align-items: center;
    margin: 8px 0 0 0;
  }
  &__controller {
    justify-content: center;
    align-items: center;
    margin: 8px 0 0 0;
  }
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
