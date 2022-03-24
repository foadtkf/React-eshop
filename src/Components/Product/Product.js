import React from 'react';
import './Product.css'
const Product = (props) => {
    const {category,name,price,stock,img}=props.product

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