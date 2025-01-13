import { useEffect, useState } from "react";
import Card from '../components/ProductCard/Card';
import axios from "axios";

function HomePage() {
    const [data, setdata] = useState([])
    const fetchProduct = async () => {
        const response = await axios.get(
            'http://localhost:8080/product/get-products'
        )
        setdata(response.data.data)
        console.log(response)
    }

    useEffect(() => {
        console.log('clicked');
        const callhandler = async () => {
            const data = await fetchProduct()
        }
        callhandler()
    }, [])

    const handleDelete = async (id) => {
        console.log('id', id);
        const data = await axios.delete(`http://localhost:8080/product/${id}`);
        setdata(data.data.data);
    };

    console.log(data)

    return (
        <>
            <h1 className="text-center">'Welcome to Home Page for Follow along'</h1>
            <div className="grid grid-cols-3">
                {data?.map((ele, index) => {
                    return (
                        <div style={{ margin: 'auto' }}>
                            <Card title={ele.title}
                                image={ele.Imgs[0] ? ele.Imgs[0] : 'Product Image missing'}
                                Index={index}
                                description={ele.description}
                                originalPrice={ele.originalPrice}
                                discountedPrice={ele.discountedPrice}
                                handleDelete={handleDelete}
                            />;
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default HomePage;