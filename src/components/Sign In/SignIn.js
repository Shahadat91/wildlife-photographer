import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./SignIn.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error.message}</p>;
  }

  const navigateSignUp = (event) => {
    navigate("/signup");
    console.log("signup");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please input your email to reset password");
    }
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <form className="form-body" onSubmit={handleSignIn}>
        <div className="login-form">
          <div className="title">Please Sign In</div>

          <div className="input-fields">
            <input
              className="user-email"
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
              Forgot Password?{" "}
              <span onClick={resetPassword} className="link-a">
                Reset Password
              </span>
            </p>
          </div>
        </div>
      </form>
      {errorElement}
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
