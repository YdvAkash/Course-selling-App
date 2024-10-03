const {Router } = require ("express");
const userRouter = Router();

    userRouter.post('/User/Signup', function(req, res){
        res.json({
            message : "Singhup Endpoint "
        })
    })
    
    userRouter.post('/User/Signin', function(req, res){
        res.json({
        message : "Singin Endpoint "
      })
    })
    
    userRouter.get('/User/Purchase', function(req, res){
        res.json({
            message : "Singhup Endpoint "
      })
    })
    

module.exports={
    userRouter : userRouter
}