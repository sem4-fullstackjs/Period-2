const express = require("express");
let app = express();
const PORT = 3000;

app.use("/", function(req, res, next) {
    let date = new Date();
    let timeStamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    console.log(timeStamp + " | LOGGED")
    next()
})

app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next){
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
      }
      req.body = calculatorRequest
      next();      
})

app.get("/api/calculator/:operation/:n1/:n2", function(req,res){  
    let data = req.body
    data.result = eval(data.n1 + data.operation + data.n2)
    res.send(data)
 })

app.listen(PORT,()=> {console.log(`Server started, listening on: ${PORT}`)});
