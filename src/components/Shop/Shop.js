import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Product from '../Products/Product'
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
  return (
    <div className='shop-container'>
    <div className='shop-product'>
    {
        products.map(product=><Product product={product} key={product.img}></Product>)

    }
    </div>
    <div className='shop-order'>
    <Cart></Cart>
    </div>
    </div>
  )
}

export default Shop