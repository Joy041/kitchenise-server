const express = require('express')
const app = express()
const port = 5000

const chef = require('./data/chefData.json')


app.get('/', (req, res) => {
  res.send('Chefs server')
})

app.get('/chef', (req, res) => {
  res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})