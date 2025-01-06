const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'temp-uploads/' })
const router = express.Router()
const { createProductController, getProductDataController } = require('../controller/Product.Controller.js')

router.post('/create-product', upload.array('files', 5), createProductController)

router.get('/get-products', getProductDataController);

module.exports = router