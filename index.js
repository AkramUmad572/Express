const express = require('express')
const app = express()
const port = 3000

// function helloworld (req,res,next)


app.get('/helloworld', (req, res) => {
  res.send('Hello World!')
})

app.get('/goodbyeworld', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})