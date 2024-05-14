import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {

    const [items,setItems] = useState([]);


    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const slicedData = data.products.slice(0,30)
            console.log(slicedData)
            setItems(slicedData)
            console.log(items)
        })
        
    },[]);
    useEffect(() => {
        console.log(items);
    }, [items]);


    return (
        <div>
            <h2>Home Page</h2>
            <span>Trending Products </span>
            <div className="product-grid">
                {items?.map((product) => (
                <div key={product.id} className="product-card">
                    <Link to={`/products/${product.id}`}>
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    </Link>
                </div>
                ))}
            </div>

            <Link to='products'>
                <button style={{width : "100%",padding:"20px"}}>View All Products  </button>
            </Link>
            
        </div>
    );
}

export default Home;