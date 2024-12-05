const express =require('express');
// const  model = require('mongoose');
const {CreateUser}=require('../controller/user.controller')
const upload =require('../middlewares/multer')

const router=express.Router();

router.get('/create-user', upload.single('file'),CreateUser)               

module.exports=router;