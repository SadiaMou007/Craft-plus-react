import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Product from '../Products/Product'
import './Shop.css'
const Shop = () => {
  //1. for shop product
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    //2. add to cart event listener function
    const [cart,setCart]=useState([])
    function handleAddToCart(product){
      const newCart=[...cart,product]
      setCart(newCart)
  }
  
  return (
    <div className='shop-container'>
    <div className='shop-product'>
    {
        products.map(product=><Product product={product} key={product.key} handleAddToCart={handleAddToCart}></Product>)

    }
    </div>
    <div className='shop-order'><Cart cart={cart}></Cart>
    </div>
    </div>
  )
}

export default Shop