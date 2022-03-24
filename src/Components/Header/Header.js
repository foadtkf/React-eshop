import React from 'react';
import logo from '../../images/Logo.svg'
import  './Header.css';
const Header = () => {
    return (
       <nav className='Header'>
       <img src={logo} alt=""></img>
        <div className='header-buttons'>
            <a href="..">Home</a><a href="..">Order</a><a href="..">FAQ</a><a href="..">About</a>
            </div>

       </nav>
    );
};

export default Header;