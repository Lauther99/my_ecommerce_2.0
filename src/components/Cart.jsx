import React, { useState } from 'react';
import '../assets/styles/cart.css'

const Cart = ({activateCart}) => {



    return (
        <div className='cart-container'>
            <div className={`modal ${activateCart}`}>
                <h2>hola</h2>
                <p>hola</p>
                <p>hola</p>
                <p>hola</p>
                <p>hola</p>
            </div>
        </div>
    );
};

export default Cart;