import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>

          <input type="submit" value="Login" className="form-submit" />
        </form>
        <p className="l">
          New to Ema-John?{" "}
          <Link to={"/signup"} className="form-link">
            Create an account
          </Link>
        </p>
        <div className="or">
          <div className="hr">
            <hr />
          </div>
          <p>or</p>
          <div className="hr">
            <hr />
          </div>
        </div>
        <button className="g-btn">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
