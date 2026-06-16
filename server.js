var express=require("express");
var kothaTodo=require("./models/todo.model")
var app=express();
app.use(express.static(__dirname+"/public"))
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
var mangoose=require("mongoose");
const dns = require('dns');
const cors=require("cors")
app.use(cors())
// Google DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);
mangoose.connect("mongodb+srv://harshitha:hello123@harshitha.vdue5eb.mongodb.net/?appName=Harshitha").then(()=>{
    console.log("connected succesfully")
}).catch((err)=>{ console.log(err) })



app.post("/",(req,res)=>{
   // console.log("line 20",req.body)
    var newUser=new kothaTodo(req.body);
    newUser.save();
    res.send({msg:req.body})
})
app.get("/",(req,res)=>{
    kothaTodo.find().then((data)=>{
       res.send(data)
    })
    res.send({msg:"no data found in databse  "})
})
app.listen(2000,()=>{
    console.log("running at port number 2000")
})