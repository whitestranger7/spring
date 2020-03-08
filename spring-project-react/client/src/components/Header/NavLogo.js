import React from 'react';
import logo from './../../config/img/logo.png';

import './Header.scss';

const navLogo = () => {
    return (
        <div className='nav__logo'>
            <img className='nav__logo-img' src={logo} alt='logo' />
        </div>
    )
};

export default navLogo;
