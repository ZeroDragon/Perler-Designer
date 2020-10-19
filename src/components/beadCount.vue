<style lang="sass" scoped>
.beadItem
  display: flex
  align-items: center
  padding: 5px
.bead
  display: inline-block
  width: 20px
  height: 20px
  border-radius: 50%
svg
  margin-right: 5px
</style>

<template lang="pug">
  .beadsCount
    template(v-if="Object.keys(beadList).length > 0")
      h3 Bead count
      div.beadItem(v-for='(count, color) of beadList')
        svg.bead(width='20', height='20')
          defs
            mask#hole
              rect(width='100%', height='100%', fill='white')
              circle(r='3', cx='10', cy='10', fill='black')
          circle#donut(r='10', cx='10', cy='10', mask='url(#hole)', :fill='color')
        | {{count}}
</template>
<script>
import { store } from 'Utils/store'
export default {
  computed: {
    beadList () {
      const { unsavedPing, unsavedProject } = store
      if (!unsavedProject) return {}
      const beads = {}
      unsavedProject.forEach(row => {
        row.forEach(cell => {
          if (!cell) return
          if (!beads[cell.color]) beads[cell.color] = 0
          beads[cell.color] += 1
        })
      })
      return beads
    }
  }
}
</script>
