import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignUp.css";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [cpassword, setCpassword] = useState({ value: "", error: "" });
  console.log(password.value, cpassword.value);
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth);
  console.log(error, user);
  //
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
  const handlecPassBlur = (e) => {
    if (e == password.value) {
      setCpassword({ value: e, error: "" });
    } else {
      setCpassword({ value: "", error: "Password mismatch" });
    }
  };
  ////
  if (user) {
    navigate("/inventory");
  }
  ////
  const handleSignUp = (e) => {
    e.preventDefault();
    if (email.value === "") {
      setEmail({ value: "", error: "required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "required" });
    }
    if (email.value && password.value && password.value === cpassword.value) {
      createUserWithEmailAndPassword(email.value, password.value);
    }
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Register</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              onBlur={(e) => handleEmailBlur(e.target.value)}
            />
          </div>
          {email?.error && <p className="error">{email.error}</p>}

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onBlur={(e) => handlePassBlur(e.target.value)}
            />
          </div>
          {password?.error && <p className="error">{password.error}</p>}

          <div className="input-group">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              onBlur={(e) => handlecPassBlur(e.target.value)}
            />
          </div>
          {cpassword?.error && <p className="error">{cpassword?.error}</p>}

          <input
            type="submit"
            value="Sign Up"
            className="form-submit"
            required
          />
        </form>
        <p className="l">
          Already have an account?{" "}
          <Link to={"/login"} className="form-link">
            Login
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

export default SignUp;
