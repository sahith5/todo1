const mongoose=require('mongoose');

var register_schema=mongoose.Schema(
    {
        user:String,
        password:String
    }
)
module.exports=mongoose.model("user registration",register_schema);