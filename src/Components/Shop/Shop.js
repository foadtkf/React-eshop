import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProduct]=useState([]);
    const [cart,setCart]=useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, []);
    const addToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
        console.log(newCart)
    }
    return (
        <div className='shop-container'>
            <div className='products'>
                {
                    products.map(product=><Product addToCart={addToCart}  key={product.id} product={product}></Product>)
                }
            </div>
            <div className='shop-right'>
                <h1>Selected items: {cart.length}</h1>
            </div>
        </div>
    );
};

export default Shop;