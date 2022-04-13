import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState({ value: "", error: "" });

  //
  const handleNameBlur = (e) => {
    setName(e);
  };

  const handleAddressBlur = (e) => {
    setAddress(e);
  };
  const handlePhoneBlur = (e) => {
    setPhone(e);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const shippingInfo = { name, email, address, phone };
    console.log(shippingInfo);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipment</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              required
              onBlur={(e) => handleNameBlur(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              value={user && user.email}
              readOnly
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              required
              onBlur={(e) => handleAddressBlur(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              name="phone"
              onBlur={(e) => handlePhoneBlur(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Add Shipping"
            className="form-submit"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
