const mongoose=require("mongoose");
var userTodos=new mongoose.Schema(
    {
        todo:{
            type:String
        },
        status:{
            type:String
        }
    }
)
var todo=mongoose.model("UserTodo",userTodos)
module.exports=todo