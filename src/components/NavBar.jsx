import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css'
import Cart from './Cart';

const NavBar = () => {
    const [activateCart, setActivateCart] = useState('modalOn');
    function modalOn() {
        activateCart === 'modalOn'? setActivateCart('') : setActivateCart('modalOn')
    }

    return (
        <nav>
            <div className='div-nav'>
                <h1><Link to='/'>Academlo Store</Link></h1>
                <div className='nav-icon'>
                    <Link to='/login' className='link-icon'>
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
                <Cart activateCart={activateCart}/>
            </div>
        </nav>
    );
};

export default NavBar;