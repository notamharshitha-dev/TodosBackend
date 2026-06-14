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
module.exports=userTodos