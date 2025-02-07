const express=require('express')
const  verifyUser =require('../middlewares/jwt-verify.js')
const router=express.Router()
const {CreateOrder,GetuserOrders}=require('../controller/order.controller.js')

router.post('/confirm-order',verifyUser,CreateOrder)
router.get('/user-orders-data',verifyUser,GetuserOrders)

module.exports=router