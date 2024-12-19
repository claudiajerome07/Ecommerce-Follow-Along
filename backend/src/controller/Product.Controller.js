const fs=require('fs') //file system
const cloudinary=require('../utilis/cloudinary.js')

const createProductController=async(req,res)=>{
    const { title,
        description,
        discountedPrice,
        originalPrice,
        stockQuantity,
        category,
        rating }=req.body
    try{
        const ImgArray=req.files.map((singleFile,index)=>{
            return cloudinary.uploader.upload(singleFile.path, {
                folder: 'uploads'
            })
        })

        const dataImgs=await Promise.all(ImgArray)
    }catch(err){

        if(err instanceof multer.MulterError){
            return res.send(400).send({
                message:'Multer error please send inage'
            })
        }
        // res.status(500).send({message:err.message,success:false})
    }
}


module.exports={createProductController}