
const {Router} = require("express")
const courseRouter = Router();


app.post('/Courses', function(req, res){
        res.json({
          message : "Singhup Endpoint "
        })
      })
      
      app.post('/Courses/preview', function(req, res){
        res.json({
          message : "Singhup Endpoint "
        })
      })
      

module.exports={
    courseRouter :courseRouter
}