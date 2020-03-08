import React from 'react';

import './ContentBar.scss';
import SearchBar from './SearchBar/SearchBar';
import Items from './Items/Items';

const contentBar = () => {
    return (
        <div className='main__wrapper'>
            <SearchBar />
            <Items />
        </div>
    );
};

export default contentBar;
