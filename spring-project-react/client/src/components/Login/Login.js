import React, { useState } from 'react';
import axios from 'axios';

import './Login.scss';

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

    return (
        <form className='form__container' onSubmit={submitHandler}>
            <div className='username__container'>
                <label>Username:</label>
                <input className='username__input' type='text' id='username' name='username' onChange={dataHandler} />
            </div>
            <div className='password__container'>
                <label>Password:</label>
                <input className='password__input' type='password' id='password' name='password' onChange={dataHandler} />
            </div>
            <div className='btn__container'>
                <button type='submit' className='btn__submit'>Log in</button>
            </div>
        </form>
    );
};

export default Login;
