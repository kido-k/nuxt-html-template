<script setup lang="ts">
const { changeCanvas } = useCanvas()

const isDragging = ref(false)
const isMouseOver = ref(false)

onMounted(() => {
  addEventListener('mouseup', () => {
    isDragging.value = false
    isMouseOver.value = false
  })
})

function mouseover() {
  isMouseOver.value = true
}

function mousedown() {
  isDragging.value = true
}
function mousemove(e: MouseEvent, type: string) {
  if (isDragging.value && isMouseOver.value) {
    const movement = e.movementX * (type === 'left' ? -1 : 1) * 4
    changeCanvas(movement, 0)
  }
}
</script>

<template>
  <v-layout class="project-page-layout">
    <v-layout
      justify-center
      align-center
      class="size-controller mr-4"
      @mousedown="mousedown"
      @mousemove="mousemove($event, 'left')"
      @mouseover="mouseover"
    >
      <div class="size-controller__bar" />
    </v-layout>
    <div>
      <PageProjectDesignLayout />
    </div>
    <v-layout
      justify-center
      align-center
      class="size-controller ml-4"
      @mousedown="mousedown"
      @mousemove="mousemove($event, 'right')"
      @mouseover="mouseover"
    >
      <div class="size-controller__bar" />
    </v-layout>
  </v-layout>
</template>

<style lang="scss" scoped>
.project-page-layout {
  width: 100%;
  height: 100%;
  justify-content: center;
}

.size-controller {
  cursor: e-resize;
  max-width: 20px;
  width: 20px;
  height: 100%;
  background-color: #f1f1f1;
  &__bar {
    margin: auto;
    width: 8px;
    height: 25%;
    border-radius: 8px;
    background-color: #bebebe;
  }
}
</style>
