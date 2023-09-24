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
    const width = canvasSize.width > 320 ? canvasSize.width : 320
    const height = canvasSize.height || canvas.value.height
    canvas.value = {width, height}
  }

  function changeCanvas(x: number, y: number) {
    const curretCanvas = canvas.value
    curretCanvas.width += x
    curretCanvas.height += y
    const width = curretCanvas.width > 320 ? curretCanvas.width : 320
    const height = curretCanvas.height > 320 ? curretCanvas.height : 320
    canvas.value = {width, height}
  }

  return {
    getCanvas,
    setCanvas,
    changeCanvas
  }
}