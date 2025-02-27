if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: './src/config/.env',
    });
}

const express=require('express');
const cors=require('cors')
const cookieParser=require('cookie-parser')


const app=express();
app.use(cors())
const userRouter=require('./routes/user.route.js')
const productRouter=require('./routes/product.route.js')
const cartRouter=require('./routes/cart.route.js')
const orderRouter=require('./routes/order.route.js')
const PaymentRouter=require('./routes/Payment.route.js')
app.use(express.json())

app.use(cookieParser())

app.get('/',(req,res)=>{
    return res.send('heyy there!')
})

// app.use('/user')

app.use('/user',userRouter)
app.use('/product',productRouter)
app.use('/cart',cartRouter)
app.use('/orders',orderRouter)
app.use('/payment',PaymentRouter)
//connecting db and running server 
module.exports=app;