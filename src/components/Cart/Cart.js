import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";
import { addToDb, deleteShoppingCart } from "../../utilities/fakedb";

const Cart = (props) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of props.cart) {
    quantity += product.quantity;
    total += product.price * product.quantity;
    shipping += product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const GrandTotal = (total + shipping + parseFloat(tax)).toFixed(2);
  return (
    <div className="cart-container">
      <h4 className="cart-title">Order Summery</h4>
      <p>Selected Item: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${GrandTotal}</h5>
      <button className="btn1">
        Clear Cart <FontAwesomeIcon className="icon" icon={faDeleteLeft} />
      </button>
      {props.children}
    </div>
  );
};

export default Cart;
