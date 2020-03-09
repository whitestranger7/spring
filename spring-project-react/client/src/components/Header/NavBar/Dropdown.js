import React, { useState } from 'react';

import './NavBar';

const Dropdown = props => {

    const [hover, setHover] = useState(false);

    const hoverHandlerEnter = () => {
        setHover(true);
    };

    const hoverHandlerLeave = () => {
        setHover(false);
    };

    let dropdownList = null;
    if (props.list) {
        dropdownList = (
            <div className='dropdown__content' style={hover ? {display: 'block'} : {display: 'none'}}>
                <ul className='dropdown__list'>
                    {props.list.map((el, index) => {
                        return (
                            <a key={index} className='dropdown__item--link' href='/#'>
                                <li>{el}</li>
                            </a>
                        );
                    })}
                </ul>
            </div>
        );
    };

    return props.list ? (
        <div className='dropdown' onMouseEnter={hoverHandlerEnter} onMouseLeave={hoverHandlerLeave} >
            <p className='dropdown__header'>{props.title}</p>
            {dropdownList}
        </div>
    ) : (
        <a className='nav__link' href='/#'>{props.title}</a>
    );
};

export default Dropdown;
