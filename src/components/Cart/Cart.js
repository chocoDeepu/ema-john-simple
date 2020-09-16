import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prd) => total + prd.price,0);

    let tax = 4.99;
    if(total <35){
        tax = 4.99
    }
    else if(total>15){
        tax = 10.99
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>Tax: {tax}</p>
            <p>Total Price: {total+tax}</p>
        </div>
    );
};

export default Cart;