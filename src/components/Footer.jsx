import React from 'react';
import '../assets/styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <h3>By: Lauther Valladares</h3>
            <h2>Made with <i className="fa-solid fa-heart fa-beat"></i> in Academlo</h2>
            <div className='social-icons fa-bounce'>
                <i className="fa-brands fa-linkedin fa-xl"></i>
                <i className="fa-brands fa-github fa-xl"></i>
                <i className="fa-brands fa-instagram fa-xl"></i>
            </div>
        </footer>
    );
};

export default Footer;