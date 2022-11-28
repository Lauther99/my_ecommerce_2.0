import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css'

const NavBar = () => {
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
                <div className='nav-icon link-icon'>
                    <i className="fa-solid fa-cart-shopping fa-xl"></i>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

/*
Debe tener 3 botones
uno para el login
otro para purchases
otro para el carrito, debe ser un modal que aparece del lado derecho
*/