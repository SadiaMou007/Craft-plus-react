import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useCart();

  //pagination
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(2);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  useEffect(() => {
    fetch(`http://localhost:5000/productCount`)
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 2);
        setPageCount(pages);
      });
  }, []);

  //2. add to cart event listener function
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);

    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div className="shop-container">
      <div className="">
        <div className="shop-product">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="pages">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={page === number ? "selected" : ""}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
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
