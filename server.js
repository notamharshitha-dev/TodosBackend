var express=require("express");
var mangoose=require("mongoose");
const dns = require('dns');

// Google DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);
mangoose.connect("mongodb+srv://harshitha:hello123@harshitha.vdue5eb.mongodb.net/?appName=Harshitha").then(()=>{
    console.log("connected succesfully")
}).catch((err)=>{ console.log(err) })
var app=express();
app.get("/",(req,res)=>{
    res.send({msg:"hello harshitha let us start backend"})
})
app.listen(2000,()=>{
    console.log("running at port number 2000")
})