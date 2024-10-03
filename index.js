const express = require('express')
const app = express()
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/User/Signup', function(req, res){
  res.json({
    message : "Singhup Endpoint "
  })
})

app.get('/User/Signin', function(req, res){
    res.json({
      message : "Singin Endpoint "
    })
  })
  
  app.get('/User/Purchase', function(req, res){
    res.json({
      message : "Singhup Endpoint "
    })
  })
  


  app.get('/Courses', function(req, res){
    res.json({
      message : "Singhup Endpoint "
    })
  })
  



app.listen(port,()=>{
    console.log('App Listening port ${port}')
});