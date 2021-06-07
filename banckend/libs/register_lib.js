const register_model=require('../model/register_mode.js');


exports.registerusers=async(req,res)=>
{
    var registers=await register_model.create(req.body);

    res.send(registers);
}


exports.getuser=async(req,res)=>{
    var userdetails=await register_model.find({"user":req.body});
    res.send(userdetails);
}




