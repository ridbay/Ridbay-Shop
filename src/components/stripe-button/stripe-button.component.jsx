import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=> {
const priceForStripe = price * 0.0028;
const publishableKey = 'pk_test_x2UJLFFMyd6fEfLhU2ntoHcb';

const onToken = token => {
    console.log(token);
    alert('Payment Successful')
}
return(
    <StripeCheckout 
    label='Pay Now'
    name='Ridbay Clothing Shop'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/F1U.svg'
    description={`Your total is ₦${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
);
};

export default StripeCheckoutButton