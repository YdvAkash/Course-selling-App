const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/Signup', (req, res) => {
  res.send('hello world')
})



app.get('/Login', (req, res) => {
    res.send('')
  })



  app.get('/Purchase', (req, res) => {
    res.send('hello world')
  })



  app.get('/Purchased Courses ', (req, res) => {
    res.send('hello world')
  })



  app.get('/', (req, res) => {
    res.send('hello world')
  })

app.listen(3000);