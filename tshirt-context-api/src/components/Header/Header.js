import React from "react";
import CustomLink from "../CustomLink/CustomLink";
const Header = () => {
  return (
    <div className="bg-yellow-900 p-2 text-2xl">
      <h2 className="text-yellow-100 p-2 text-center">
        Choose Your Favorite TShirt
      </h2>
      <div className=" text-xl flex text-white text-bold font-mono gap-8">
        <CustomLink to={"/home"}>Home</CustomLink>
        <CustomLink to={"/OrderReview"}>Order Review</CustomLink>
      </div>
    </div>
  );
};

export default Header;
