import React from "react";

const Tshirt = (props) => {
  const { id, name, picture, price } = props.shirt;
  console.log(props.shirt);
  return (
    <div className="bg-white m-2 rounded p-8  mx-auto text-xl">
      <img className="h-48 w-48" src={picture} alt="" />
      <h4>{name}</h4>
      <h4>Price: ${price}</h4>
      <button className="p-2 bg-yellow-300 rounded  my-3 hover:bg-yellow-600">
        Add To Cart
      </button>
    </div>
  );
};

export default Tshirt;
