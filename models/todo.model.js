const mongoose=require("mongoose");
var userTodos=new mongoose.Schema(
    {
        title:{
            type:String
        },
        status:{
            type:String
        }
    }
)
var todo=mongoose.model("todo",userTodos)
module.exports=todo