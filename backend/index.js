// 1.import express
const express = require("express")

// 2.initialising
const app = new express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// 3.Api creation
app.get('/', (req, res) => {
  res.json("hello welcome to backend")
})

app.get('/view', (req, res) => {
    res.json("hello")
})
app.post('/signup',(req,res)=>{
    res.send(req.body.name)
})

// 4.setting port
app.listen(3005,()=>{
    console.log("port is running");
})