import { useEffect } from "react";
import { useState } from "react";

const useShirts = () => {
  const [shirts, setShirts] = useState([]);
  useEffect(() => {
    fetch("tshirts.json")
      .then((res) => res.json())
      .then((data) => setShirts(data));
  }, []);
  return [shirts, setShirts];
};
export default useShirts;
