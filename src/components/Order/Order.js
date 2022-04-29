import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const [cart, setCart] = useCart();

  const handleRemoveItem = (product) => {
    console.log(product);
    const rest = cart.filter((item) => item._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };
  return (
    <div className="shop-container">
      <div className="pp">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>

      <div className="shop-order">
        <Cart cart={cart}>
          <Link to={"/shipment"}>
            <button>
              Proceed Shipment
              <FontAwesomeIcon className="icon" icon={faArrowCircleRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
