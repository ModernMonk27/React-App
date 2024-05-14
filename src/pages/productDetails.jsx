import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const productDetails = () => {

    const {id} = useParams();

    const [product,setProduct] = useState(null);

    useEffect(() => {

        fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))


    },[id])

    return(
        <div>
            <h2>Product Details</h2>
        </div>
    )


    return (
        <div>
            
        </div>
    );
};

export default productDetails;