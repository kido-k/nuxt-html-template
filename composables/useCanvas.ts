export const useCanvas = () => {

  const canvas = useState<Canvas>('canvas', () => {
    return {
      width: 1280,
      height: 800
    }
  })

  function getCanvas() {
    return canvas.value
  }

  function setCanvas(canvasSize: Canvas) {
    const width = canvasSize.width
    const height = canvasSize.height || canvas.value.height
    canvas.value = {width, height}
  }

  function changeCanvas(x: number, y: number) {
    const curretCanvas = canvas.value
    curretCanvas.width += x
    curretCanvas.height += y
    canvas.value = curretCanvas
  }

  return {
    getCanvas,
    setCanvas,
    changeCanvas
  }
}