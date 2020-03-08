import React from 'react';

import './Modal.scss';
import { navigationItems } from '../../config/constants';
import ModalDropdown from './ModalDropdown';

const Modal = props => {
    return (
        <div className='modal__nav'>
            <div className="closebtn" onClick={props.mobile}>&times;</div>
            {navigationItems.map((el, index) => {
                return <ModalDropdown key={index} header={el.title} list={el.list}/>
            })}
        </div>
    )
};

export default Modal;
