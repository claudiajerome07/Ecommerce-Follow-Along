const express=require('express')
const {verifyToken}=require('../middlewares/jwt-verify')
const router=express.Router()
const {CreateOrder}=require('../controller/order.controller.js')
router.post('/confirm-order',verifyToken,CreateOrder)

module.exports=router