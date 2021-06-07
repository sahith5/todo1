const user_model=require('../model/user_model.js');
const express=require('express');
exports.get=async(req,res)=>{
    var course=await user_model.find();
    res.json(course);

}

exports.post=async(req,res)=>{
    var course=await user_model.create(req.body);
    console.log(course);
    res.json(course);
}


exports.delete=async(req,res)=>{
    var course=await user_model.deleteOne({_id:req.params.id});
    res.json(course);
}

exports.update=async(req,res)=>{
    
    var course=await user_model.updateOne({_id:req.params.id},{$set:{ammount:req.body.ammount}});
    res.json(course);

}
