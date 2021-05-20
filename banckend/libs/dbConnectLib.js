const config=require('../config/config.js')

const mongoose=require('mongoose');

module.exports={
    connect:function(){
        mongoose.connect(config.mongooseConnectionString,{ useUnifiedTopology: true},function()
            {
                console.log(" database connected"); 
            })

    }
}