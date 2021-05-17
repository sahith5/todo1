const express=require('express');
const app=express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());
var idx=0;
var users=[]



app.post("/post",function(req,res)
{   var x=req.body;
    
    x.id=idx;
    users.push(x);
    console.log(users);
    res.send(x);
    idx++;
})



app.delete("/delete/:id",function(req,res)
{
    console.log(req.params.id)

    users=users.filter((x)=>{return (x.id!=req.params.id)});

})



app.put("/put/:id",function(req,res)
{
    console.log("updated");
    var p=req.params.id;
    for(var x of users)
    {
        if(x.id==p)
        {
            x["ammount"]=req.body.ammount;
        }
    }
    res.send("successfull");
})


app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/frontend/index.html");
})




app.get("/get",function(req,res)
{
    console.log(users);
    res.json(users);
    
})




app.listen(3000,function()
{
    
    console.log("serer started");
})
