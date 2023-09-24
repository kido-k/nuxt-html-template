<script setup lang="ts">
const { getCanvas } = useCanvas()

const canvas = ref()
const context = ref()
const isDrawable = ref(false)

const canvasSize = computed(() => {
  return getCanvas()
})

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
  <v-card
    class="design-layout"
    :style="{ width: `${canvasSize.width}px`, height: `${canvasSize.height}` }"
  >
    {{ canvasSize }}
    <canvas
      id="canvas"
      :width="String(canvasSize.width)"
      :height="String(canvasSize.height)"
      @mousedown="onDragStart"
      @mousemove="drawLine"
      @mouseup="onDragEnd"
      @mouseout="onDragEnd"
    />
  </v-card>
</template>

<style lang="scss" scoped>
.design-layout {
  padding: 12px 24px;
}
</style>
