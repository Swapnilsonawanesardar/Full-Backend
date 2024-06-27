require('dotenv').config()
const express = require('express')
const app = express()

const githubData = {
  name: 'Swapnil',
  age: 22,
  city: 'Indore'
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/name',(req,res) => {
  res.send('Swapnil')
})

app.get('/github',(req,res) => {
  res.send(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})