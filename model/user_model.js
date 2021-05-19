const mongoose=require('mongoose');


const user_schema= new mongoose.Schema(
    {
        course:String,
        ammount:Number
    }
)

module.exports=mongoose.model("course table",user_schema)