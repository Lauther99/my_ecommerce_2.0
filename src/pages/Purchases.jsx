import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import '../assets/styles/purchases.css'
import { Link } from 'react-router-dom';

const Purchases = () => {
    const dispatch = useDispatch();
    const purchases = useSelector(state => state.purchases);

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])

    function addZeros(word) {
        const str = word.toString().split()
        if (word.toString().length < 6) {
            for (let index = 1; index < (6 - word.toString().length); index++) {
                str?.unshift(0)
            }
        }
        return str?.join('')
    }

    function formatDate(date) {
        const newDate = new Date(date);
        return newDate.toLocaleDateString()
    }

    return (
        <div className='purchase-orders-container'>
            <h1>My purchases</h1>
            {
                purchases.map(purchase => (
                    <ul key={purchase.id} className='purchase-order'>
                        <div className='purchase-order-header'>
                            <span><strong>Purchase Order N°: {addZeros(purchase.cartId)}</strong></span>
                            <span><strong>Bought on {formatDate(purchase.createdAt)}</strong></span>
                        </div>
                        {
                            purchase.cart?.products.map(item => (
                                <li key={Math.random()} className='purchase-products-list'>
                                    <Link to={`/product/${item.id}`}>
                                        <div className='purchase-product-image'>
                                        </div>
                                        <div className='title'>{item.title}</div>
                                    </Link>
                                    <div className='quantity'>{item.productsInCart.quantity}</div>
                                    <div className='price'>${item.price}</div>
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </div>
    );
};

export default Purchases;