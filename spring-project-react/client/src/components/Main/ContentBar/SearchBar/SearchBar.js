import React, { useState } from 'react';

import './SearchBar.scss';

import { itemList } from './../../../../config/constants';
import SearchItem from './SearchItem/SearchItem';

const SearchBar = () => {
    const [searchData, setSearchData] = useState({
        inputValue: '',
        matchItems: []
    });

    const [inputValue, matchItems] = [searchData.inputValue, searchData.matchItems];

    const searchHandler = (e) => {
        const newMatchItems = itemList.filter(el => {
            return el.header.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setSearchData({inputValue: e.target.value, matchItems: newMatchItems});
    };

    return (
        <div className='search__container'>
            <div className='search__input__wrapper'>
                <input
                    className='search__input'
                    type='text'
                    placeholder='Search...'
                    onChange={(e) => searchHandler(e)}
                />
            </div>
            {inputValue === '' || matchItems.length === 0 ? (
                <div className='search__nothing--wrapper'>
                    <div className='search__nothing' id='search__nothing'>
                        <p className='search__nothing--text'>No results...</p>
                    </div>
                </div>
            ) : (<div className='search__items--wrapper'>
                    <div className='search__items--container'>
                        <ul className='search__items'>
                            {matchItems.map((el, index) => {
                                return <SearchItem key={index} header={el.header} />
                            })}
                        </ul>
                    </div>
                </div>)}
        </div>
    );
};

export default SearchBar;