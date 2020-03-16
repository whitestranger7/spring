import React, { useState } from 'react';
import axios from 'axios';

import './../Login/Login.scss';
import './SignUp.scss';

const SignUp = props => {
    const [data, setData] = useState({
        username: {
            value: '',
            validation: true
        },
        password: {
            value: '',
            validation: true
        },
        passwordRepeat: {
            validation: true
        },
        firstName: {
            value: '',
            validation: true
        },
        lastName: {
            value: '',
            validation: true
        },
        age: {
            value: null,
            validation: true
        }
    });

    // const dataHandler = e => {
    //     setData({ ...data, [e.target.name]: e.target.value });
    // };

    const usernameHandler = e => {
        let validation;
        if (e.target.value.length < 3 || e.target.value.includes(' ')) {
            validation = false;
        } else {
            validation = true;
        }

        setData({ ...data, username: { value: e.target.value, validation } });
    };

    const passwordHandler = e => {
        let validation;
        if (
            e.target.value.length >= 4 &&
            e.target.value.search(/[a-zA-Z]/) !== -1 &&
            e.target.value.search(/[0-9]/) !== -1
        ) {
            validation = true;
        } else {
            validation = false;
        }

        setData({ ...data, password: { value: e.target.value, validation } });
    };

    const passwordRepeatHandler = e => {
        let validation;
        if (e.target.value === data.password.value) {
            validation = true;
        } else {
            validation = false;
        }

        setData({ ...data, passwordRepeat: { validation } });
    };

    const firstNameHandler = e => {
        let validation;
        if (e.target.value.length < 3 || e.target.value.includes(' ')) {
            validation = false;
        } else {
            validation = true;
        }

        setData({ ...data, firstName: { value: e.target.value, validation } });
    };

    const lastNameHandler = e => {
        let validation;
        if (e.target.value.length < 3 || e.target.value.includes(' ')) {
            validation = false;
        } else {
            validation = true;
        }

        setData({ ...data, lastName: { value: e.target.value, validation } });
    };

    const ageHandler = e => {
        let validation;
        if (e.target.value === '0') {
            validation = false;
        } else {
            validation = true;
        }

        setData({ ...data, age: { value: e.target.value, validation } });
    };

    console.log(data);

    const submitHandler = async e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({
            username: data.username.value,
            password: data.password.value,
            firstName: data.firstName.value,
            lastName: data.lastName.value,
            age: data.age.value
        });

        try {
            const result = await axios.post('/signup', body, config);
            console.log(result.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className='form__container' onSubmit={submitHandler}>
            <div className='field__container'>
                <div className='label__wrapper'>
                    <label>Username:</label>
                </div>
                <div className='input__wrapper'>
                    <input
                        className='username__input'
                        type='text'
                        id='username'
                        name='username'
                        onChange={usernameHandler}
                        style={
                            !data.username.validation
                                ? { borderColor: 'red' }
                                : null
                        }
                    />
                </div>
                <div
                    className='input__helper--text'
                    style={
                        !data.username.validation ? { display: 'flex' } : null
                    }
                >
                    <p>Invalid username</p>
                </div>
            </div>
            <div className='field__container'>
                <div className='label__wrapper'>
                    <label>Password:</label>
                </div>
                <div className='input__wrapper'>
                    <input
                        className='password__input'
                        type='password'
                        id='password'
                        name='password'
                        onChange={passwordHandler}
                        style={
                            !data.password.validation
                                ? { borderColor: 'red' }
                                : null
                        }
                    />
                </div>
                <div className='input__helper--text' style={
                        !data.password.validation ? { display: 'flex' } : null
                    }>
                    <p>Invalid password</p>
                </div>
            </div>
            <div className='field__container'>
                <div className='label__wrapper'>
                    <label>Repeat password:</label>
                </div>
                <div className='input__wrapper'>
                    <input
                        className='password__input'
                        type='password'
                        id='passwordRepeat'
                        name='passwordRepeat'
                        onChange={passwordRepeatHandler}
                        style={
                            !data.passwordRepeat.validation
                                ? { borderColor: 'red' }
                                : null
                        }
                    />
                </div>
                <div className='input__helper--text' style={
                        !data.passwordRepeat.validation ? { display: 'flex' } : null
                    }>
                    <p>Invalid password</p>
                </div>
            </div>
            <div className='field__container'>
                <div className='label__wrapper'>
                    <label>First Name:</label>
                </div>
                <div className='input__wrapper'>
                    <input
                        className='password__input'
                        type='text'
                        id='firstName'
                        name='firstName'
                        onChange={firstNameHandler}
                        style={
                            !data.firstName.validation
                                ? { borderColor: 'red' }
                                : null
                        }
                    />
                </div>
                <div className='input__helper--text' style={
                        !data.firstName.validation ? { display: 'flex' } : null
                    }>
                    <p>Invalid name</p>
                </div>
            </div>
            <div className='field__container'>
                <div className='label__wrapper'>
                    <label>Last Name:</label>
                </div>
                <div className='input__wrapper'>
                    <input
                        className='password__input'
                        type='text'
                        id='lastName'
                        name='lastName'
                        onChange={lastNameHandler}
                        style={
                            !data.lastName.validation
                                ? { borderColor: 'red' }
                                : null
                        }
                    />
                </div>
                <div className='input__helper--text' style={
                        !data.lastName.validation ? { display: 'flex' } : null
                    }>
                    <p>Invalid name</p>
                </div>
            </div>
            <div className='field__container'>
                <div className='label__wrapper'>
                    <label>Age:</label>
                </div>
                <div className='input__wrapper'>
                    <input
                        className='password__input'
                        type='number'
                        id='age'
                        name='age'
                        onChange={ageHandler}
                        style={
                            !data.age.validation ? { borderColor: 'red' } : null
                        }
                    />
                </div>
                <div className='input__helper--text' style={
                        !data.age.validation ? { display: 'flex' } : null
                    }>
                    <p>Invalid age</p>
                </div>
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
