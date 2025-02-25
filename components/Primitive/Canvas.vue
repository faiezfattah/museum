<script setup lang="ts">
// parent input
const model = defineModel<string | null>()

// state
const canvas = ref<HTMLCanvasElement | null>(null)
let ctx = ref<CanvasRenderingContext2D | null>(null)
let isDrawing = ref(false)

// setting
const bg = '#E2DDD4'
const drawWidth = 1
const drawColor = '#000'

onMounted(() => {
    if (canvas.value) {
        canvas.value.width = 300
        canvas.value.height = 100
        
        ctx.value = canvas.value.getContext('2d')

        if (ctx.value) {
            ctx.value.fillStyle = bg
            ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)
        }
    }
})

function start(event: MouseEvent) {
    // console.log("mouse is down!")
    isDrawing.value = true
    if (!ctx.value || !canvas.value) return
    ctx.value.beginPath()
    ctx.value.moveTo(
        event.clientX - canvas.value.offsetLeft,
        event.clientY - canvas.value.offsetTop
    )
    event.preventDefault()
}

function draw(event: MouseEvent) {
    // console.log("draw started!")
    if (!isDrawing.value || !ctx.value || !canvas.value) return

    ctx.value.lineTo(
        event.clientX - canvas.value.offsetLeft,
        event.clientY - canvas.value.offsetTop
    )
    ctx.value.strokeStyle = drawColor
    ctx.value.lineWidth = drawWidth
    ctx.value.lineCap = 'round'
    ctx.value.lineJoin = 'round'
    ctx.value.stroke()
}

function stop(event: MouseEvent) {
    // console.log("draw ended!")
    if (!isDrawing.value || !ctx.value || !canvas.value) return

    ctx.value.stroke()
    ctx.value.closePath()
    isDrawing.value = false
    event.preventDefault()
    
    model.value = getCanvas();
}
function getCanvas() {
    if (!canvas.value) return null
    return canvas.value.toDataURL("image/png")
}
</script>

<template>
    <canvas ref="canvas"
        @mousedown="start"
        @mousemove="draw"
        @mouseleave="stop"
        @mouseup="stop"
        class="cursor-pointer bg-brand-white rounded-xl">
    </canvas>
</template>