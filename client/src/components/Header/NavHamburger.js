import React from 'react';

import './Header.scss';

const NavHamburger = props => {

    return (
        <div className='nav__hamburger'>
            <div className='hamburger__wrapper' onClick={props.mobile}>
                <div className='hamburger__bar'></div>
                <div className='hamburger__bar'></div>
                <div className='hamburger__bar'></div>
            </div>
        </div>
    );
};

export default NavHamburger;
