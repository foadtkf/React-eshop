import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import  './Header.css';
const Header = () => {
    return (
       <nav className='Header'>
       <img src={logo} alt=""></img>
        <div className='header-buttons'>
            <a href="/shop">Home</a>
        <Link to='/shop'>Shop</Link>
        <a href="..">Order</a>
        <a href="..">FAQ</a>
        <Link to='/about'>About</Link>
            </div>

       </nav>
    );
};

export default Header;