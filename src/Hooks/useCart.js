import { useEffect, useState } from "react";
import { getStoredCard } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
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
  return [cart, setCart];
};
export default useCart;
