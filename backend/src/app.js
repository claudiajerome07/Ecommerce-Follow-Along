if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: './src/config/.env',
    });
}

const express=require('express');


const app=express();

app.get('/',(req,res)=>{
    return res.send('heyy there!')
})

//connecting db and running serve
module.exports=app;