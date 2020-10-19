const express = require('express')
const Path = require('path')

const app = express()
app.use(express.static(Path.join(__dirname, '../dist/')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(Path.join(__dirname, '../dist/index.html'))
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
