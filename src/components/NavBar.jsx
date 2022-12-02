import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/navbar.css'
import { getCartProductsThunk } from '../store/slices/cartProducts.slice';
import Cart from './Cart';

const NavBar = () => {
    const [activateCart, setActivateCart] = useState('');
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function modalOn() {
        if (token) {
            activateCart === 'modalOn' ? setActivateCart('') : setActivateCart('modalOn')
            dispatch(getCartProductsThunk())
        } else {
            navigate('/login')
        }
    }


    return (
        <nav>
            <div className='div-nav'>
                <h1><Link to='/'>Your Friendly Store</Link></h1>
                <div className='nav-icon'>
                    <Link to='/user' className='link-icon'>
                        <i className="fa-solid fa-user fa-xl"></i>
                    </Link>
                </div>
                <div className='nav-icon'>
                    <Link to='/purchases' className='link-icon'>
                        <i className="fa-solid fa-store fa-xl"></i>
                    </Link>
                </div>
                <div className='nav-icon link-icon' onClick={() => modalOn()}>
                    <i className="fa-solid fa-cart-shopping fa-xl"></i>
                </div>
                <Cart activateCart={activateCart} setActivateCart={setActivateCart}/>
            </div>
        </nav>
    );
};

export default NavBar;