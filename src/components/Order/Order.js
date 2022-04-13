import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveItem = (product) => {
    console.log(product);
    const rest = cart.filter((item) => item.id != product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="pp">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
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
