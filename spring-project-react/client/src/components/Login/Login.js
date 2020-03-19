import React, { useState } from 'react';
import axios from 'axios';
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

        // const body = JSON.stringify({
        //     username,
        //     password
        // });

        // try {
        //     if (!isAuth) {
        //         await loginUser(body);
        //         history.push('/');
        //     } else {
        //         alert('User already loaded, please log out');
        //     }
        // } catch (err) {
        //     console.log(err);
        // }

        try {
            const result = await axios.post('/login', { username, password });
            if(result.status === 202) {
                history.push('/')
            }else {
                alert('Invalid data');
            }
        } catch (err) {
            console.error('Unable to authorize');
        }
    }

    console.log(data);

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
