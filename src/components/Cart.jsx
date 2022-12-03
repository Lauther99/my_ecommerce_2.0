import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductThunk, getCartProductsThunk } from '../store/slices/cartProducts.slice';
import { setPurchasesThunk } from '../store/slices/purchases.slice';
import '../assets/styles/cart.css'

const Cart = ({ activateCart }) => {
    const cartProducts = useSelector(state => state.cartProducts);
    const dispatch = useDispatch();
    let total = 0

    useEffect(() => {
        dispatch(getCartProductsThunk())
    },[])

    function deleteItem(product){
        dispatch(deleteProductThunk(product.productsInCart.productId))
    }

    function completePurchase(){
        dispatch(setPurchasesThunk())
    }

    return (
        <div className='cart-container' >
            <div className={`modal ${activateCart}`} >
                <h2>Your cart</h2>
                <ul className='cart-product-list'>
                    {
                        cartProducts.map(product => {
                            const totalProduct = product.price * product.productsInCart.quantity
                            total = totalProduct + total
                            return (
                                <li className='cart-product' key={Math.random()}>
                                    <div className='product-info'>
                                        <div className='details'>
                                            <p>{product.brand}</p>
                                            <p>{product.title}</p>
                                            <p>Quantity: {product.productsInCart.quantity}</p>
                                        </div>
                                        <div className='product-delete'>
                                            <i className="fa-regular fa-trash-can" onClick={() => deleteItem(product)}></i>
                                        </div>
                                    </div>
                                    <div className='subtotal'>
                                        <p><strong>${totalProduct}</strong></p>
                                    </div>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
                <div className='total'>
                    <p>Total: </p>
                    <p><strong>{total}</strong></p>
                </div>
                <button type='button' className='checkout-btn' onClick={() => completePurchase()}>Buy now</button>
            </div>
        </div>
    );
};

export default Cart;