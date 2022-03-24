import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './Cart.css';

const Cart = (props) => {
  let total=0;
  
  for(const product of props.cart){
       total=total+product.price;
  }
  console.log(props);
  return (
    <div className='cart-container'><h4 className='cart-title'>Order Summery</h4>
    <p>Selected Item: {props.cart.length}</p>
    <p>Total Price: ${total}</p>
    <p>Total Shipping: $</p>
    <p>Tax: $</p>
    <h5>Grand Total: $</h5>
    <button>Clear Cart <FontAwesomeIcon className="icon" icon={faDeleteLeft}/></button>
    <button>Review order <FontAwesomeIcon className="icon" icon={faArrowCircleRight} /></button>
    </div>
  )
}

export default Cart