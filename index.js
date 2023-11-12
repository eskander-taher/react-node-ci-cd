const express = require("express")
const app = express()

app.get("/message", (req,res)=>{
    res.send("hello from server")
})

app.listen(5000, console.log("api running on 5000"))