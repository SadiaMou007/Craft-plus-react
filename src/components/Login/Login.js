import React, { useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const handleEmailBlur = (e) => {
    if (/\S+@\S+\.\S+/.test(e)) {
      setEmail({ value: e, error: "" });
    } else {
      setEmail({ value: "", error: "Invalid email" });
    }
  };
  const handlePassBlur = (e) => {
    if (e.length > 5) {
      setPassword({ value: e, error: "" });
    } else {
      setPassword({ value: "", error: "Password too short" });
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email.value === "") {
      setEmail({ value: "", error: "required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "required" });
    }
    if (email.value && password.value) {
      signInWithEmailAndPassword(email.value, password.value);
    }
  };
  ////
  /////
  ////
  if (user) {
    console.log(user);
    navigate(from, { replace: true });
  }
  ////

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onBlur={(e) => handleEmailBlur(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onBlur={(e) => handlePassBlur(e.target.value)}
              required
            />
          </div>

          <input type="submit" value="Login" className="form-submit" />
        </form>
        <div className="error">
          {loading && <p>Loading..</p>}
          {error && <p>{error.message}</p>}
        </div>

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
