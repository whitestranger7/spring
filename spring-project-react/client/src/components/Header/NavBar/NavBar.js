import React from 'react';

import './NavBar.scss';
import Dropdown from './Dropdown';
import { navigationItems } from './../../../config/constants';

const navBar = () => {

    return (
        <div className='nav__bar'>
            {navigationItems.map((el, index) => {
                return <Dropdown key={index} title={el.title} list={el.list} />
            })}
        </div>
    )
};

export default navBar;
