import React, { useState } from 'react';

import './App.scss';

import Modal from '../Modal/Modal';
import Header from './../Header/Header';
import Main from './../Main/Main';

function App() {

    const [mobileModal, setMobileModal] = useState(false);

    const mobileModalHandler = () => {
        mobileModal ? setMobileModal(false) : setMobileModal(true);
    };

    return (
        <div className='App'>
            {mobileModal ? <Modal mobile={mobileModalHandler} /> : <Header mobile={mobileModalHandler} />}
            <Main />
        </div>
    );
}

export default App;
