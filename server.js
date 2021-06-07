const express=require('express');
const app=express();
const dbconnect=require('./banckend/libs/dbConnectLib.js');

const config=require('./banckend/config/config.js');
const user_libs=require('./banckend/libs/user_libs.js');
const register_libs=require('./banckend/libs/register_lib.js');

const register_model=require('./banckend/model/register_mode.js');


dbconnect.connect();

const cookieparse=require('cookie-parser');
const expresssession=require('express-session');
const session = require('express-session');

app.use(cookieparse());
app.use(expresssession({
    resave:false,
    saveUninitialized:false,
    secret:'user',
    cookie:{maxAge:1000000}
}))




// const mongoose=require('mongoose');
// var password=process.env.password;
// mongoose.connect(connectionstring,{},function()
// {
//     console.log(" database connected");
// })



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

app.post("/adduser",register_libs.registerusers);


app.post("/authen",async(req,res)=>{


    var details= await register_model.findOne({user:req.body.user});
    console.log(details.password);
    if(req.session.userID)
    {
        
        res.send(true)
    }
    else if(details.password==req.body.password)
    {

        req.session.userID=details._id;
        console.log("user seee is"+req.session.userID)
        res.send(true)
    }
    else{
        res.send(false)
    }






}
)




app.get("/index",function(req,res)
{
    res.sendFile(__dirname+"/frontend/index.html");
})

app.get("/register",function(req,res)
{
    res.sendFile(__dirname+"/frontend/register.html");
})




app.get("/",function(req,res)
{

    console.log(req.sessionID);
    res.sendFile(__dirname+"/frontend/login.html");
})


app.post("/users",user_libs.post)

app.get("/users",user_libs.get)




app.delete("/users/:id",user_libs.delete)


app.put("/users/:id",user_libs.update);


var port=config.webport;

app.listen(port,function()
{
    
    console.log("serer started");
})
