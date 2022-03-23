import React from 'react'
import './Product.css'
const Product = (props) => {
    const {img,name,price,ratings}=props?.product;
    
  return (
    <div className='product-container'>
    <img src={img} alt="" />
    <div className="product-detail">
    <p className='product-name'>{name}</p>
    <p className='product-price'>Price: ${price}</p>
    <p><small>Rating: {ratings}</small></p>
    </div>
    
    
    <button className='product-btn' onClick={()=>props.handleAddToCart(props.product)}>Add to Cart</button>
   
    </div>
  )
}

export default Product