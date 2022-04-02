import React from "react";
import useShirts from "../../Hooks/useShirts";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";

const Home = () => {
  const [shirts, setShirts] = useShirts();
  return (
    <div>
      <div className="grid md:grid-cols-3 mx-4">
        <div className="md:col-span-2 bg-yellow-50">
          <div className="grid md:grid-cols-2 gap-8">
            {shirts.map((shirt) => (
              <Tshirt shirt={shirt}></Tshirt>
            ))}
          </div>
        </div>
        <div className="md:col-span-1 bg-yellow-600">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
