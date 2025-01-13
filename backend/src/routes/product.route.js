const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'temp-uploads/' })
const router = express.Router()
const { createProductController, getProductDataControllerupdateProductController, getSingleProductDocumentController, deleteSingleProductController } = require('../controller/Product.Controller.js')

router.post('/create-product', upload.array('files', 5), createProductController)

router.get('/get-products', getProductDataController);

router.put('/update-products/:id', upload.array('files', 5), updateProductController)

router.get('/get-single/:id', getSingleProductDocumentController)

router.delete('/:id', deleteSingleProductController)


module.exports = router