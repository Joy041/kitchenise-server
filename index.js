const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const chef = require('./data/chefData.json')

app.use(cors())


app.get('/', (req, res) => {
  res.send('Chefs server')
})

app.get('/chef', (req, res) => {
  res.send(chef)
})

app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  const chefId = chef.find(c => c._id === id);
  res.send(chefId)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})