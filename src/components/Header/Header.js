import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };

  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div className="headerC">
        <Link to="/home">Home</Link>
        <Link to="/order">Order</Link>
        <Link to={"/inventory"}>Inventory</Link>
        <Link to="/about">About Us</Link>
        {user ? (
          <button onClick={handleSignout} className="logout-btn">
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {user && <p>{user.email}</p>}
      </div>
    </nav>
  );
};

export default Header;
