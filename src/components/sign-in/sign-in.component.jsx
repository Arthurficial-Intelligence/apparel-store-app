import React, { useState } from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle, auth } from "../../firebase/firebase.utilities";


const SignIn = () => {
  const [ signInObject, setSignInObject ] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password }  = signInObject

    try { 
      await auth.signInWithEmailAndPassword(email, password);
      setSignInObject({
        email: "",
        password: ""
      });
    } catch (error) {

    }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setSignInObject({ ...signInObject, [name]: value });
  };

  return (
    <>
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={signInObject.email}
            handleChange={handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={signInObject.password}
            handleChange={handleChange}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
