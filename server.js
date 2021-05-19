const express=require('express');
const app=express();

const user_libs=require('./libs/user_libs.js');
const mongoose=require('mongoose');
var password=process.env.password;
var connectionstring="mongodb+srv://sahith:"+password+"@cluster0.jivxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(connectionstring,{},function()
{
    console.log(" database connected");
})

app.use(express.urlencoded({extended : false}));
app.use(express.json());
// var idx=0;
// var users=[]



// app.post("/post",function(req,res)
// {   var x=req.body;
    
//     x.id=idx;
//     users.push(x);
//     console.log(users);
//     res.send(x);
//     idx++;
// })



// app.delete("/delete/:id",function(req,res)
// {
//     console.log(req.params.id)

//     users=users.filter((x)=>{return (x.id!=req.params.id)});

// })



// app.put("/put/:id",function(req,res)
// {
//     console.log("updated");
//     var p=req.params.id;
//     for(var x of users)
//     {
//         if(x.id==p)
//         {
//             x["ammount"]=req.body.ammount;
//         }
//     }
//     res.send("successfull");
// })

// app.get("/get",function(req,res)
// {
//     console.log(users);
//     res.json(users);
    
// })



app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/frontend/index.html");
})


app.post("/users",user_libs.post)

app.get("/users",user_libs.get)




app.delete("/users/:id",user_libs.delete)


app.put("/users/:id",user_libs.update);


var port=process.env.PORT||3000;

app.listen(port,function()
{
    
    console.log("serer started");
})
