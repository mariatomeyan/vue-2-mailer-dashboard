<template>
    <div>
      <a ref="saveAs" href="" download="canvas.jpeg"> Save as image </a>
    </div>
</template>

<script>
    export default {
        name: "ExportAs",
      methods: {
          saveAsImage(canvas) {
            this.$refs.saveAs.href = canvas.toDataURL(
                {
                  format: 'jpeg',
                  quality: 0.8
                }
            )
            this.download = 'canvas.jpg'
          }
      }
    }
</script>

<style scoped>

</style>
