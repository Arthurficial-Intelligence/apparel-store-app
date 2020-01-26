import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <>
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>PRODUCT</span>
          </div>
          <div className="header-block">
            <span>DESCRIPTION</span>
          </div>
          <div className="header-block">
            <span>QUANTITY</span>
          </div>
          <div className="header-block">
            <span>PRICE</span>
          </div>
          <div className="header-block">
            <span>REMOVE</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <div className="total">TOTAL: ${cartTotal}</div>
        <div className='test-warning'>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: future dtate - CVV: 123  
        </div>
        <StripeCheckoutButton price={cartTotal} />
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
