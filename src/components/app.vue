<style lang="sass" scoped>
.canvasSpace
  grid-area: canvas
.bottom
  grid-area: bottom
.side
  grid-area: side
.framework
  height: 100%
  display: grid
  grid-template-columns: 150px 1fr
  grid-template-rows: 1fr 120px
  grid-template-areas: "side canvas" "side bottom"
</style>

<template lang="pug">
  .app--holder.framework
    displaycanvas
    side
    bottom
</template>
<script>
import displaycanvas from '~/displayCanvas.vue'
import bottom from '~/bottom.vue'
import side from '~/side.vue'
export default {
  components: {
    displaycanvas,
    side,
    bottom
  }
}
</script>
