import React from 'react';
import './Product.css'
const Product = (props) => {
    const {id,category,name,seller,price,stock,ratings,ratingsCount,img,shipping,quantity}=props.product

    return (
        <div className='product'>
        <img src={img} alt="img not found" srcSet=""  className='prod-img'/>
            <h3>Name: {name}</h3>
            <h4>Category: {category}</h4>
            <p>Stock: {stock}</p>
            <p><strong>Price</strong> {price}$</p>
            <button className='btn-add' onClick={()=>props.addToCart(props.product)} >Add to cart</button>
        </div>
    );
};

export default Product;