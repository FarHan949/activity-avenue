import React from 'react';
import './Header.css'
import logo from '../../images/logo5-removebg-preview.png'

const Header = () => {
    return (
        <div className='nav'>
            <h1>Activity Avenue</h1>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;