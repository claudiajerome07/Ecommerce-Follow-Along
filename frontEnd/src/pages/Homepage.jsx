import { useEffect, useState } from "react";
import Card from '../components/ProductCard/Card';
import axios from "axios";

function HomePage(){
    const [data,setdata]=useState()
    const fetchProduct=async()=>{
        const response = await axios.get(
            'http://localhost:8080/product/get-products'
        )
        setdata(response.data)
        // console.log(response)
    }

    useEffect(()=>{
        console.log('clicked');
        const callhandler=async()=>{
            const data=await fetchProduct()
        }
        callhandler()
    },[])

    console.log(data)

    return (
        <>
            <h1 className="text-center">'Welcome to Home Page for Follow along'</h1>
            <div className="grid grid-cols-3">
                {data.map((ele, index) => {
                    return (
                        <div style={{ margin: 'auto' }}>
                            <Card title={ele.title} 
                            image={ele.images[0]?ele.images[0]: 'Product Image missing'} 
                            Index={index}
                            description={ele.description}
                            originalPrice={ele.originalPrice}
                            discountedPrice={ele.discountedPrice}
                             />;
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default HomePage;