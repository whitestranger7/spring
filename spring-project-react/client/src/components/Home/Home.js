import React, { useState } from 'react';

import Modal from '../Modal/Modal';
import Header from '../Header/Header';
import Main from '../Main/Main';

function Home() {

    const [mobileModal, setMobileModal] = useState(false);

    const mobileModalHandler = () => {
        mobileModal ? setMobileModal(false) : setMobileModal(true);
    };

    return (
        <div className='Home'>
            {mobileModal ? <Modal mobile={mobileModalHandler} /> : <Header mobile={mobileModalHandler} />}
            <Main />
        </div>
    );
}

export default Home;
