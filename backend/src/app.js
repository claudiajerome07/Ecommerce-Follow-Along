if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: './src/config/.env',
    });
}

const express=require('express');


const app=express();
const userRouter=require('./routes/user.route')

app.get('/',(req,res)=>{
    return res.send('heyy there!')
})

// app.use('/user')

app.get('/user',userRouter)

//connecting db and running serve
module.exports=app;