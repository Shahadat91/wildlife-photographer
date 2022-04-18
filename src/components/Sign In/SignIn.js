import React, { useRef } from "react";
import {useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };

  const navigateSignUp = (event) => {
    navigate("/signup");
    console.log("signup");
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form onSubmit={handleSignIn}>
        <div className="login-form">
          <div className="title">Please Sign In</div>

          <div className="input-fields">
            <input
              className="username"
              ref={emailRef}
              type="email"
              name="email"
              id=""
              placeholder="your email"
              required
            />

            <input
              className="password"
              ref={passwordRef}
              type="password"
              name="password"
              id=""
              placeholder="password"
              required
            />
          </div>
          <button className="button">Sign In</button>
      <div className="link">
        <p>
          New at this site? Please{" "}
          <span className="link-a" onClick={navigateSignUp}>
            SignUp
          </span>
        </p>
        <p>
          Forgot Password? <span className="link-a" >Reset Password</span>
        </p>
      </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
