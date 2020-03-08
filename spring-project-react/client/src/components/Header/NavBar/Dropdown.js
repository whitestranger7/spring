import React from 'react';

import './NavBar';

const dropdown = props => {
    let dropdownList = null;
    if (props.list) {
        dropdownList = (
            <div className='dropdown__content'>
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
    }

    return props.list ? (
        <div className='dropdown'>
            <p className='dropdown__header'>{props.title}</p>
            {dropdownList}
        </div>
    ) : (
        <a className='nav__link' href='/#'>{props.title}</a>
    );
};

export default dropdown;
