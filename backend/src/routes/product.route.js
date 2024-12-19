const express=require('express')
const multer = require('multer')
const upload = multer({dest: 'temp-uploads/'})
const router=express.Router
const {createProductController}=require('../controller/Product.Controller.js')

router.post('/create-product',upload.array('files',5), createProductController)

module.exports=router