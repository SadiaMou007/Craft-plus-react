import React, { useEffect, useState } from "react";
import { addToDb, getStoredCard } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import "./Shop.css";
const Shop = () => {
  //1. for shop product
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //2. add to cart event listener function
  const [cart, setCart] = useState([]);

  // function handleAddToCart(product) {
  //   const newCart = [...cart, product];
  //   setCart(newCart);
  //   /// for local storage///
  //   addToDb(product.id);
  // }

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
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

  ///for local storage display ///
  useEffect(() => {
    const storedData = getStoredCard();
    const savedCart = [];
    for (const id in storedData) {
      const previousProduct = products?.find((product) => product.id === id);
      if (previousProduct) {
        console.log(previousProduct);
        const quantity = storedData[id];
        previousProduct.quantity = quantity;
        savedCart.push(previousProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
