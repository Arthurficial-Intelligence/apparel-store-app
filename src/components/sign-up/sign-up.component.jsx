import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  auth,
  createUserProfileDocument
} from "../../firebase/firebase.utilities";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [signUpObj, setSignUpObj] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = signUpObj;

    if (password !== confirmPassword) {
      alert("oops! Looks like your passwords don't match.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setSignUpObj({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setSignUpObj({ ...signUpObj, [name]: value });
  };

  return (
    <>
      <div className="sign-up">
        <h2 className="title">Already have an account?</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={signUpObj.displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={signUpObj.email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={signUpObj.password}
            onChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={signUpObj.confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    </>
  );
};

export default SignUp;
