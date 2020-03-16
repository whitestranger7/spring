import React, { useState } from 'react';

import './SignUp.scss';

const SignUp = props => {
    const [data, setData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        age: null
    });

    // const {username, password, firstName, lastName, age} = data;

    const dataHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    console.log(data);

    return (
        <form className='form__container'>
            <div className='username__container'>
                <label>Username:</label>
                <input
                    className='username__input'
                    type='text'
                    id='username'
                    name='username'
                    onChange={dataHandler}
                />
            </div>
            <div className='password__container'>
                <label>Password:</label>
                <input
                    className='password__input'
                    type='password'
                    id='password'
                    name='password'
                    onChange={dataHandler}
                />
            </div>
            <div className='password__container'>
                <label>First Name:</label>
                <input
                    className='password__input'
                    type='password'
                    id='firstName'
                    name='firstName'
                    onChange={dataHandler}
                />
            </div>
            <div className='password__container'>
                <label>Last Name:</label>
                <input
                    className='password__input'
                    type='password'
                    id='lastName'
                    name='lastName'
                    onChange={dataHandler}
                />
            </div>
            <div className='password__container'>
                <label>Age:</label>
                <input
                    className='password__input'
                    type='password'
                    id='age'
                    name='age'
                    onChange={dataHandler}
                />
            </div>
            <div className='btn__container'>
                <button type='submit' className='btn__submit'>
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default SignUp;
