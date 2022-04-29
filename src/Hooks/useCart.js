import { useEffect, useState } from "react";
import { getStoredCard } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedData = getStoredCard();
    const savedCart = [];
    const keys = Object.keys(storedData);
    console.log(keys);
    fetch("http://localhost:5000/productByKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storedData) {
          //local storage(id:value)
          const previousProduct = products?.find(
            (product) => product._id === id
          );
          if (previousProduct) {
            const quantity = storedData[id];
            previousProduct.quantity = quantity;
            savedCart.push(previousProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);
  return [cart, setCart];
};
export default useCart;
