import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems }) => {
  return (
    <>
      <div className="cart-dropdown">
        <div className="cart-items">{cartItems.map(item => {})}</div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropDown);
