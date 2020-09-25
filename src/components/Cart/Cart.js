import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    
    let total=0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total=total + product.price * product.quantity;
    }
 
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
            <br/>
           {props.children}
        </div>
    );
};

export default Cart;