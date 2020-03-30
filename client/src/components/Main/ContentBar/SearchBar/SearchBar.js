import React, { useState } from 'react';
import axios from 'axios';

import './SearchBar.scss';
import SearchItem from './SearchItem/SearchItem';

const SearchBar = () => {
    const [searchData, setSearchData] = useState({
        matchItems: []
    });

    const { inputValue, matchItems } = searchData;

    const searchHandler = async e => {
        try {
            const result = await axios.get(`/list?search=${e.target.value}`);
            setSearchData({
                matchItems: result.data
            })
        } catch (err) {
            console.log('error');
        }
    };

    return (
        <div className='search__container'>
            <div className='search__input__wrapper'>
                <input
                    className='search__input'
                    type='text'
                    placeholder='Search...'
                    onChange={e => searchHandler(e)}
                />
            </div>
            {inputValue === '' || matchItems.length === 0 ? (
                <div className='search__nothing--wrapper'>
                    <div className='search__nothing' id='search__nothing'>
                        <p className='search__nothing--text'>No results...</p>
                    </div>
                </div>
            ) : (
                <div className='search__items--wrapper'>
                    <div className='search__items--container'>
                        <ul className='search__items'>
                            {searchData.matchItems.map((el, index) => {
                                return (
                                    <SearchItem
                                        key={index}
                                        header={el.header}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
