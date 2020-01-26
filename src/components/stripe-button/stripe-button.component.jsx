import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { ReactComponent as Logo } from "../../assets/crown.svg";


const StripeCheckoutButton = ({price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_EZXhRSzLDHw67aDwahbzGNnj00AAbpAaRb';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label="pay now"
            name="Arthur's Apparel Store"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;