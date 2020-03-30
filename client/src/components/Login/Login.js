import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Login.scss';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

import { loginUser } from '../../store/actions/auth';

const Login = ({ history, loginUser, isAuth }) => {

    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const {username, password} = data;

    const dataHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    
    const submitHandler = async e => {
        e.preventDefault();

        const body = { username, password };

        try {
            if (!isAuth) {
                const result = await loginUser(body);
                if(!result){
                    alert('Invalid Credentials')
                }else {
                    alert('User was logging in');
                    history.push('/');
                }
            } else {
                alert('User already loaded');
            }
        } catch (err) {
            console.error('Unable to authorize');
        }
    }

    return (
        <form className='form__container' onSubmit={submitHandler}>
            <InputField name='username' type='text' onChange={dataHandler} />
            <InputField name='password' type='password' onChange={dataHandler} />
            <Button type='submit' text='Login' />
        </form>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps, { loginUser })(Login);
