import axios from "axios"
import { useEffect, useState } from "react"
import CartCard from "../components/ProductCard/CartCard"


function CartPage(){
    const [UsersCartData,setUsersCartdata] = useState([])
    useEffect(() => {
        const getCartData = async () => {
            const token = localStorage.getItem('token')
            if (!token) {
                return alert('token is missing, please Login')
            }
            const response = await axios.get(`http://localhost:8080/cart/get-user-cart-data?token=${token}`)
            console.log(response)
            setUsersCartdata(response.data.cartData)
        }
        getCartData()
    }, [])
    return (
        <div>

            {UsersCartData?.map((singleCartObject,index)=>{
                return (
                    <div key={index}>
                        <CartCard 
                            title={singleCartObject?.productId?.title}
                            image={singleCartObject?.productId?.Imgs[0]}
                            // index={index}
                            description={singleCartObject?.productId?.description}
                            stockPrice={singleCartObject?.productId?.stockPrice}
                            originalPrice={singleCartObject?.productId?.originalPrice}
                            discountedPrice={singleCartObject?.productId?.discountedPrice}
                            rating={singleCartObject?.productId?.rating}
                            id={singleCartObject?._id}
                            createdBy={singleCartObject?.userId}
                        
                        />
                    </div>
                )
            })}
            

        </div>
    )
    
}

export default CartPage