import React from 'react';
import { connect } from 'react-redux';

import './NavBar.scss';
import Dropdown from './Dropdown';

const navBar = ({ navList }) => {

    return (
        <div className='nav__bar'>
            {navList.map((el, index) => {
                return <Dropdown key={index} title={el.title} list={el.list} />
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        navList: state.navList
    }
}

export default connect(mapStateToProps)(navBar);
