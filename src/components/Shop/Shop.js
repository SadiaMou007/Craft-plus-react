import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { addToDb, getStoredCard } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useProducts(); //use custom hook to load data
  const [cart, setCart] = useState([]);

  ///for local storage get previous products quantity ///
  useEffect(() => {
    const storedData = getStoredCard();
    const savedCart = [];
    for (const id in storedData) {
      //local storage(id:value)
      const previousProduct = products?.find((product) => product.id === id);
      if (previousProduct) {
        const quantity = storedData[id];
        previousProduct.quantity = quantity;
        savedCart.push(previousProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  //2. add to cart event listener function
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="shop-product">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="shop-order">
        <Cart cart={cart}>
          <Link to={"/order"}>
            <button>
              Review Order{" "}
              <FontAwesomeIcon className="icon" icon={faArrowCircleRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
