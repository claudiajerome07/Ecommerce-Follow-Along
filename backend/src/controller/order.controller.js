import mongoose, { mongo } from "mongoose"
import usermodel from "../model/user_model"
import orderModel from "../model/order.model"

async function CreateOrder(req,res) {
    const userId=req.userId
    const {Items,address,totalAmount}=req.body
    try{
        if (!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(400).send({message:'Invalid user Id',success:false})
        }
        const checkUser=await usermodel.findOne({_id:userId});
        if(!checkUser){
            return res.status(400).send({message:'User not present Please signup',success:false})
        }
        if(!Items){
            return res.status(400).send({message:'Please add items to order',success:false})
        }
        const order=await orderModel.create({user:userId,orderItems:Items,shippingAddress:address,totalAmount:totalAmount})
        return res
            .status(201)
            .send({ message: 'Data Successfully fetched', success: true, order });
    }catch(err){
        return resizeBy.status(500).send({message:err.message,success:false})
    }
}

module.exports={CreateOrder,}