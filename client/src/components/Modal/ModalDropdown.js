import React, { useState } from 'react';

import './Modal.scss';

const ModalDropdown = props => {
    const [displayList, setDisplayList] = useState(false);

    const displayListHandle = () => {
        displayList ? setDisplayList(false) : setDisplayList(true);
    };

    return (
        <div className='modal__nav__container'>
            <div className='modal__nav__wrapper'>
                <div className='modal__nav--header' onClick={displayListHandle}>
                    <p className='modal__nav--mainText'>{props.header}</p>
                    {props.list ? (
                        <div
                            className='modal__nav__arrow--wrapper'
                        >
                            <div
                                className='modal__nav--arrow'
                                style={
                                    displayList
                                        ? {
                                              transform:
                                                  'rotate(225deg) translate(-5px,-10px) scale(1)'
                                          }
                                        : null
                                }
                            ></div>
                        </div>
                    ) : null}
                </div>
                {props.list ? (
                    <div
                        className='modal__nav__listContainer'
                        style={displayList ? { display: 'flex' } : null}
                    >
                        <ul className='modal__nav__listWrapper'>
                            {props.list.map((el, index) => {
                                return (
                                    <li className='modal__nav--listElement' key={index}>
                                        <a href='modal__listElement--link'>
                                            {el}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ModalDropdown;
