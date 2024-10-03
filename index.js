const express = require('express')
const {createUserRoutes} = require("./Routes/user")
const {createCourseRoutes} =require("./Routes/ course")
const app = express()
const port = 3000;

app.use("/user",userRouter);
app.use("/course",courseRouter );



createUserRoutes(app);
createCourseRoutes(app);
  



app.listen(3200);