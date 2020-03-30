import React from 'react';

import './Main.scss';
import ButtonsBar from './ButtonsBar/ButtonsBar';
import HeroBar from './HeroBar/HeroBar';
import ContentBar from './ContentBar/ContentBar';

const Main = () => {
    return (
        <main>
            <ButtonsBar />
            <HeroBar />
            <ContentBar />
        </main>
    )
};

export default Main;
