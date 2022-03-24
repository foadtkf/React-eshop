import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProduct]=useState([]);
    const [cart,setCart]=useState([])
    const [price,setPrice]=useState([0])
    useEffect(() => {
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, []);
    const addToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
        console.log(newCart)
        newCart.map(scart=>setPrice(parseInt(scart.price)+parseInt(price)))
    }
    return (
        <div className='shop-container'>
            <div className='products'>
                {
                    products.map(product=><Product addToCart={addToCart}  key={product.id} product={product}></Product>)
                }
            </div>
            <div>
            <div className='shop-right' id='stick'>
            <h1>Order summary</h1>
                <h6>Selected items: {cart.length}</h6>
            <h6>Total price: {price}</h6>
            <h6>Total shipping</h6>
            <h6>Total tax</h6>
            <h6>Grand total</h6>
            </div>
            </div>
        </div>
    );
};

export default Shop;