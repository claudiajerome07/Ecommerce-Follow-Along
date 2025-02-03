const express=require('express')
const {verifyToken}=require('../middlewares/jwt-verify')
const router=express.Router()
const {CreateOrder,GetuserOrders}=require('../controller/order.controller.js')

router.post('/confirm-order',verifyToken,CreateOrder)
router.get('/user-orders-data',verifyToken,GetuserOrders)

module.exports=router