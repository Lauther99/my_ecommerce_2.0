import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartProductsThunk } from '../store/slices/cartProducts.slice';
import Cart from './Cart';
import '../assets/styles/navbar.css'

const NavBar = () => {
    const [activateCart, setActivateCart] = useState('');
    const dispatch = useDispatch()

    function modalOn() {
        activateCart === 'modalOn' ? setActivateCart('') : setActivateCart('modalOn')
        dispatch(getCartProductsThunk())
    }

    return (
        <nav>
            <ul className='div-nav'>
                <p><Link to='/'>Your Friendly Store</Link></p>
                <li className='nav-icon home-icon'>
                    <Link to='/' className='link-icon'>
                        <i class="fa-solid fa-house fa-xl"></i>
                    </Link>
                </li>
                <li className='nav-icon'>
                    <Link to='/user' className='link-icon'>
                        <i className="fa-solid fa-user fa-xl"></i>
                    </Link>
                </li>
                <li className='nav-icon'>
                    <Link to='/purchases' className='link-icon'>
                        <i className="fa-solid fa-store fa-xl"></i>
                    </Link>
                </li>
                <li className='nav-icon link-icon' onClick={() => modalOn()}>
                    <i className="fa-solid fa-cart-shopping fa-xl"></i>
                </li>
                <Cart activateCart={activateCart} setActivateCart={setActivateCart} />
            </ul>
        </nav>
    );
};

export default NavBar;