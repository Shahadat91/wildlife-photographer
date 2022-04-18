import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, upateError] = useUpdateProfile(auth);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //console.log(name,email, password);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name});
    console.log('Updated profile');
    navigate('/home');
  };

  if(user){
      console.log('user', user);
  }

  if(loading){
    return <Loading></Loading>
}

  const navigateSignIn = () => {
    navigate("/signin");
    console.log("signin");
  };
  return (
    <div style={{ marginTop: "60px" }}>
      <form  className="form-body" onSubmit={handleSignUp}>
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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
