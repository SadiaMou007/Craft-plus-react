import React from "react";
import logo from "../../images/Logo.svg";
import './Header.css';

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div className="headerC">
      <a href="./home">Home</a>
      <a href="./order">Order</a>
      <a href="./inventory">Inventory</a>
      <a href="./about" >About Us</a>
      </div>
    </nav>
  );
};

export default Header;
