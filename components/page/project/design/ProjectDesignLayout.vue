<script setup lang="ts">
const canvasWidth = '800'
const canvasHeight = '600'
const canvas = ref()
const context = ref()
const isDrawable = ref(false)

onMounted(() => {
  canvas.value = document.querySelector('#canvas')
  context.value = canvas.value.getContext('2d')
  context.value.lineCap = 'round'
  context.value.lineJoin = 'round'
  context.value.lineWidth = 5
  context.value.storokeStyle = '#000000'
})

const onDragStart = (e: MouseEvent) => {
  const posX = e.offsetX
  const posY = e.offsetY
  context.value.beginPath()
  context.value.lineTo(posX, posY)
  context.value.stroke()
  isDrawable.value = true
}
const drawLine = (e: MouseEvent) => {
  if (!isDrawable.value) return
  const posX = e.offsetX
  const posY = e.offsetY
  context.value.lineTo(posX, posY)
  context.value.stroke()
}
const onDragEnd = () => {
  context.value.closePath()
  isDrawable.value = false
}
</script>

<template>
  <v-card class="design-layout">
    <canvas
      id="canvas"
      :width="canvasWidth"
      :height="canvasHeight"
      @mousedown="onDragStart"
      @mousemove="drawLine"
      @mouseup="onDragEnd"
      @mouseout="onDragEnd"
    />
  </v-card>
</template>

<style lang="scss" scoped>
.design-layout {
  width: 100%;
  height: 100%;
  padding: 12px 24px;
}
</style>
