import React, { useState } from 'react';
import axios from 'axios';

import './Login.scss';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const Login = props => {

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

        try {
            const result = await axios.post('/login', { username, password });
            if(result.status === 202) {
                props.history.push('/')
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

export default Login;
