import React from 'react';

import './Main.scss';
import HeroBar from './HeroBar/HeroBar';
import ContentBar from './ContentBar/ContentBar';

const Main = () => {
    return (
        <main>
            <HeroBar />
            <ContentBar />
        </main>
    )
};

export default Main;
