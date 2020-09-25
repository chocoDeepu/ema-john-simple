import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { NavLink } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys =Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey =>{
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart (previousCart);
    },[])


const handelAddProduct = (product) =>{ 
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === product.key);
    let count = 1;
    let newCart; 
    if (sameProduct) {
         const count = sameProduct.quantity + 1;
         sameProduct.quantity = count;
         const others = cart.filter(pd => pd.key !== toBeAddedKey);
        newCart = [...others, sameProduct];
     }
     else{
         product.quantity = 1;
        newCart = [...cart, product]
     }
    setCart(newCart);
    
    addToDatabaseCart(product.key, count);
}

    return (
        <div className="twin-container">
            <div className="product-container">
            <ul>
                {
                    products.map(pd => <Product
                        key={pd.key} 
                        showButton={true}
                        handelAddProduct={handelAddProduct}
                        product={pd}></Product>)
                }
            </ul>
            </div>
            <div className="cart-container"></div>
                <Cart cart={cart}>
                <NavLink to="/review">
            <button className="main-button">Review order</button>
            </NavLink>
                </Cart>
        </div>
    );
};

export default Shop;