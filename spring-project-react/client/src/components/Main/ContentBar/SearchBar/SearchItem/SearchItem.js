import React from 'react';

import './SearchItem.scss';

const SearchItem = props => {
    return (
        <a href={`/#item__wrapper ${props.header}`} className='search__item--link'>
            <li className='search__item'>
                <p>{props.header}</p>
            </li>
        </a>
    )
};

export default SearchItem;
