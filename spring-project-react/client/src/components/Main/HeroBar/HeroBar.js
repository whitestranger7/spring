import React from 'react';

import './HeroBar.scss';
import { heroBarObj } from './../../../config/constants';

const heroBar = () => {
    return (
        <div className='main__hero' id='main__hero'>
            <div className='hero__container'>
                <h1>{heroBarObj.title}</h1>
                <p>{heroBarObj.description}</p>
            </div>
        </div>
    );
};

export default heroBar;
