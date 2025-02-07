import React, { useEffect, useState } from 'react'
// import { response } from '../../../backend/src/app'  
import CartCard from '../components/ProductCard/CartCard'
import axios from 'axios'

function OrderHistory() {

    const [OrderedData,setOrderedData]=useState([])

    const fetchOrderedProducts=async()=>{
        const token=localStorage.getItem('token')
        if(!token){
            return alert('Please log in, token is missing')
        }
        const response=await axios.get(`http://localhost:8080/orders/user-orders-data?token=${token}`)
        setOrderedData(response.data.orders)
        console.log(response.data.orders)
    }

    useEffect(()=>{
        fetchOrderedProducts()
    },[])
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

                      />
                  </div>
              )
          })}
    </div>
  )
}

export default OrderHistory