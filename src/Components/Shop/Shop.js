import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProduct]=useState([]);
    const [cart,setCart]=useState([])
    const [price,setPrice]=useState([0])
    const [tax,setTax]=useState([0])
    const [shipping,setShipping]=useState([0])

    useEffect(() => {
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, []);
    const addToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
        newCart.map(scart=>setTax((parseFloat(scart.price)*0.05)+parseFloat(tax)))
        newCart.map(scart=>setPrice(parseInt(scart.price)+parseInt(price)))
        newCart.map(scart=>setShipping(parseInt(scart.shipping)+parseInt(shipping)))
        // newCart.map(scart=>setShipping(parseInt(scart.shipping+parseInt(shipping)))
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
            <h6>Total price: {price}$</h6>
            <h6>Total shipping: {shipping}$</h6>
            <h6>Total tax: {tax}$</h6>
            <h6>Grand total: {(price+shipping+tax)}$</h6>
            </div>
            </div>
        </div>
    );
};

export default Shop;