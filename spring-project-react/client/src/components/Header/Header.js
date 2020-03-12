import React from 'react';

import './Header.scss';
import NavLogo from './NavLogo';
import NavBar from './NavBar/NavBar';
import NavHamburger from './NavHamburger';

const Header = props => {
    return (
        <header id='nav'>
            <nav>
                <NavLogo />
                <NavBar />
                <NavHamburger mobile={props.mobile} />
            </nav>
        </header>
    )
};

export default Header;