import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './ButtonsBar.scss';
import Button from '../../Button/Button';

import { logoutUser } from '../../../store/actions/auth';

const ButtonsBar = ({ isAuth, logoutUser }) => {

    return (
        <div className='buttons__bar'>
            <div className='buttons__wrapper'>
                {isAuth ? (
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Button type='button' text='Logout' color='red' onClick={logoutUser} />
                    </Link>
                ) : (
                    <Fragment>
                        <Link to='/signup' style={{ textDecoration: 'none' }}>
                            <Button type='submit' text='Sign Up' />
                        </Link>
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            <Button type='submit' text='Login' color='grey' />
                        </Link>
                    </Fragment>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps, { logoutUser })(ButtonsBar);
