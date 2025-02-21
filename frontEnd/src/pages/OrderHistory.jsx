import React, { useEffect, useState } from 'react'
// import { response } from '../../../backend/src/app'  
import CartCard from '../components/ProductCard/CartCard'
import axios from 'axios'
import { useSelector } from 'react-redux'

function OrderHistory() {

    const [OrderedData,setOrderedData]=useState([])
    const data=useSelector((state)=>state.user)
    const fetchOrderedProducts=async()=>{
        const token=localStorage.getItem('token')
        if(!token){
            return alert('Please log in, token is missing')
        }
        const response = await axios.get(`https://ecommerce-follow-along-keha.onrender.com/orders/user-orders-data?token=${token}`)
        const reversedData=response.data.orders?.reverse()
        setOrderedData(reversedData)
        console.log(response.data.orders)
    }

    useEffect(()=>{
        fetchOrderedProducts()
    },[])

    const handleCancel=async(id)=>{
        console.log(id);
        const token=localStorage.getItem('token')
        if(!token){
            return alert('Token is missing, Login')
        }

        await axios.patch(`https://ecommerce-follow-along-keha.onrender.com/orders/cancel-order?token=${token}&orderId=${id}`)
        fetchOrderedProducts()
    }
  return (
    <div>
          {OrderedData?.map((singleCartObject, index) => {
              return (
                  <div key={index}>
                      <CartCard
                          title={singleCartObject?.orderItems?.title}
                          images={singleCartObject?.orderItems?.Imgs[0]}
                          // index={index}
                          description={singleCartObject?.orderItems?.description}
                          stockPrice={singleCartObject?.orderItems?.stockPrice}
                          originalPrice={singleCartObject?.orderItems?.originalPrice}
                          discountedPrice={singleCartObject?.orderItems?.discountedPrice}
                          rating={singleCartObject?.orderItems?.rating}
                          id={singleCartObject?._id}
                          orderStatus={singleCartObject.orderStatus}
                          createdBy={singleCartObject?.userId}
                          handleCancel={handleCancel}
                      />
                  </div>
              )
          })}
    </div>
  )
}

export default OrderHistory