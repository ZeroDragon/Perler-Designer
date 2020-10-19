<template lang="pug">
  .canvasSpace
    |{{changeProject}}
    canvas#perler(
      @click="clickPerler"
      @contextmenu.prevent="clearPerler"
    )
</template>

<script>
import { store, commit } from 'Utils/store'
export default {
  data: () => ({
    canvas: null,
    canvasSize: 800,
    perlerSize: 8,
    ctx: null,
    grid: null,
    newGrid: () => [...new Array(101)].map(_ => {
      return []
    })
  }),

  computed: {
    width () { return this.canvasSize },
    height () { return this.width },
    selectedColor () {
      return store.selectedColor
    },
    changeProject () {
      if (store.selectedProject === 'clearGridnow') {
        this.grid = this.newGrid()
        this.drawBoard()
        return ''
      }
      if (!store.selectedProject) return ''
      this.grid = store.selectedProject
      this.drawBoard()
      return ''
    }
  },

  methods: {
    drawGrid (color, cellSize) {
      const { perlerSize, width, height, ctx } = this
      for (var cicler = 0; cicler <= width; cicler += cellSize) {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.moveTo(cicler, 0)
        ctx.lineTo(cicler, height)
        ctx.moveTo(0, cicler)
        ctx.lineTo(width, cicler)
        ctx.stroke()
      }
    },
    drawPerler (color, x, y) {
      const { ctx, perlerSize, width, height } = this
      ctx.beginPath()
      ctx.arc(x, y, perlerSize / 2, 0, 2 * Math.PI)
      ctx.fillStyle = color
      ctx.fill()
      ctx.save()
      ctx.beginPath()
      ctx.arc(x, y, perlerSize / 8, 0, 2 * Math.PI)
      ctx.clip()
      ctx.clearRect(x - perlerSize / 2, y - perlerSize / 2, perlerSize, perlerSize)
      ctx.restore()
    },
    drawBoard () {
      const { drawGrid, grid, ctx, width, height, perlerSize, drawPerler } = this
      ctx.clearRect(0, 0, width, height)
      drawGrid('#eee', perlerSize)
      drawGrid('#ccc', perlerSize * 5)
      drawGrid('#aaa', perlerSize * 10)
      drawGrid('#000', perlerSize * 50)
      grid.forEach((row, rowK) => {
        row.forEach((cell, cellK) => {
          if (cell) {
            const left = rowK * perlerSize - perlerSize / 2
            const top = cellK * perlerSize - perlerSize / 2
            drawPerler(
              cell.color,
              left,
              top
            )
          }
        })
      })
      commit('unsavedProject', this.grid)
      commit('unsavedPing', new Date().getTime())
    },
    clickPerler (event) {
      const { canvas, grid, drawBoard, selectedColor, perlerSize } = this
      const canvasLeft = canvas.offsetLeft - perlerSize / 2
      const canvasTop = canvas.offsetTop - perlerSize / 2
      const left = Math.round((event.pageX - canvasLeft) / perlerSize)
      const top = Math.round((event.pageY - canvasTop) / perlerSize)
      if (!grid[left][top]) grid[left][top] = {}
      grid[left][top] = { color: selectedColor }
      drawBoard()
    },
    clearPerler (event) {
      const { canvas, grid, drawBoard, perlerSize } = this
      const canvasLeft = canvas.offsetLeft - perlerSize / 2
      const canvasTop = canvas.offsetTop - perlerSize / 2
      const left = Math.round((event.pageX - canvasLeft) / perlerSize)
      const top = Math.round((event.pageY - canvasTop) / perlerSize)
      grid[left][top] = false
      drawBoard()
    }
  },

  mounted () {
    const { width, height, drawBoard } = this
    const canvas = document.getElementById('perler')
    const grid = this.newGrid()
    canvas.width = width
    canvas.height = height
    this.canvas = canvas
    this.grid = grid
    this.ctx = canvas.getContext('2d')
    drawBoard()
  }
}
</script>
