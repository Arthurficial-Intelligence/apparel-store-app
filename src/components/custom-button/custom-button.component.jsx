import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...propsObject
}) => {
  return (
    <>
      <button
        className={`${inverted ? "inverted" : ""} ${
          isGoogleSignIn ? "google-sign-in" : ""
        } custom-button`}
        {...propsObject}
      >
        {children}
      </button>
    </>
  );
};

export default CustomButton;
