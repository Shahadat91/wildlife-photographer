import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = nameRef.current.value
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(name,email, password);
  };

  const navigateSignIn = (event) => {
    navigate("/signin");
    console.log("signin");
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form onSubmit={handleSignUp}>
        <div className="login-form">
          <div className="title">Please Sign Up</div>

          <div className="input-fields">
            <input
              className="username"
              ref={nameRef}
              type="text"
              name="name"
              id=""
              placeholder="your name"
              required
            />
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
              Already have an account? Please{" "}
              <span className="link-a" onClick={navigateSignIn}>
                Sign In
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
