var express=require("express");
var newUserTodo=require("./models/todo.model")
var app=express();
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


app.get("/",(req,res)=>{
    newUserTodo.find().then((res)=>{ console.log(res)
     })
    res.send({msg:"hello harshitha let us start backend for todos"})
})
app.post("/",(req,res)=>{
    console.log(req.body)
    const newUser=new newUserTodo(req.body);
    newUser.save();
    res.send({msg:"data Posted succesfully"})
})
app.listen(2000,()=>{
    console.log("running at port number 2000")
})