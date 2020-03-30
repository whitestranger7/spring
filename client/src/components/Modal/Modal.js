import React from 'react';
import { connect } from 'react-redux';

import './Modal.scss';
import ModalDropdown from './ModalDropdown';

const Modal = ({ navList, mobile }) => {
    return (
        <div className='modal__nav'>
            <div className="closebtn" onClick={mobile}>&times;</div>
            {navList.map((el, index) => {
                return <ModalDropdown key={index} header={el.title} list={el.list}/>
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        navList: state.navList
    }
}

export default connect(mapStateToProps)(Modal);
