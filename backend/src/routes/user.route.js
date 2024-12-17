const express = require('express');
// const  model = require('mongoose');
const {CreateUser , verifyUserController,signup,login} = require('../controller/user.controller.js')
const upload = require('../middlewares/multer.js')
// const jwt=require('jasonwebtoken')
const router = express.Router();

router.post('/create-user', upload.single('file'), CreateUser)
router.get('/activation/:token',)

router.post("/signup",signup)
router.post("/login",login)

module.exports = router;