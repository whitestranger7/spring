import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal/Modal';
import Header from '../Header/Header';
import Main from '../Main/Main';

import { fillListUp } from '../../store/actions/itemList';

const Home = ({ fillListUp }) => {

    const [mobileModal, setMobileModal] = useState(false);

    useEffect(() => {
        fillListUp();
    }, [])

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

export default connect(null, { fillListUp })(Home);
