const express=require('express');
const app=express();
app.use(express.json());
var users=[]
app.post("/courses",function(req,res)
{
    console.log("ressee");
    users.push(req.body)
    res.json(req.body)
    
})

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/frontend/index.html");
})


app.listen(3000,function()
{
    console.log("serer started");
})
