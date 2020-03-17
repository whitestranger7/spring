import React from 'react'
import { Link } from 'react-router-dom';

import './ButtonsBar.scss';
import Button from '../../Button/Button';

const ButtonsBar = () => {
    return (
        <div className='buttons__bar'>
            <div className='buttons__wrapper'>
                <Link to='/signup' style={{textDecoration: 'none'}}>
                    <Button type='submit' text='Sign Up' />
                </Link>
                <Link to='/login' style={{textDecoration: 'none'}}>
                    <Button type='submit' text='Login' color='grey'/>
                </Link>
            </div>
        </div>
    )
}

export default ButtonsBar
