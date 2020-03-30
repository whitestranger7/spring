import React, { useState } from 'react';
import { connect } from 'react-redux';

import './../Login/Login.scss';
import './SignUp.scss';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

import {
    nameValidation,
    passwordValidation,
    ageValidation
} from './validations';
import { registerUser } from '../../store/actions/auth';

const SignUp = ({ history, isAuth, registerUser }) => {
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

    const usernameHandler = e => {
        const validation = nameValidation(e);
        setData({ ...data, username: { value: e.target.value, validation } });
    };

    const passwordHandler = e => {
        let validation = passwordValidation(e);
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
        const validation = nameValidation(e);
        setData({ ...data, firstName: { value: e.target.value, validation } });
    };

    const lastNameHandler = e => {
        const validation = nameValidation(e);
        setData({ ...data, lastName: { value: e.target.value, validation } });
    };

    const ageHandler = e => {
        const validation = ageValidation(e);
        setData({ ...data, age: { value: e.target.value, validation } });
    };

    const submitHandler = async e => {
        e.preventDefault();

        const body = JSON.stringify({
            username: data.username.value,
            password: data.password.value,
            firstName: data.firstName.value,
            lastName: data.lastName.value,
            age: data.age.value
        });

        try {
            if (!isAuth) {
                const result = await registerUser(body);
                if(!result){
                    alert('Invalid Credentials')
                }else {
                    history.push('/');
                    alert('User was created');
                }
            } else {
                alert('User already loaded');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const functions = [
        usernameHandler,
        passwordHandler,
        passwordRepeatHandler,
        firstNameHandler,
        lastNameHandler,
        ageHandler
    ];
    let inputs = [];
    for (let el in data) {
        inputs.push([data[el], el]);
    }

    return (
        <form className='form__container' onSubmit={submitHandler}>
            {inputs.map((el, index) => {
                let type = 'text';
                if (index === 1 || index === 2) {
                    type = 'password';
                }
                if (index === 5) {
                    type = 'number';
                }
                return (
                    <InputField
                        key={index}
                        name={el[1]}
                        type={type}
                        onChange={functions[index]}
                        inputStyle={
                            !el[0].validation ? { borderColor: 'red' } : null
                        }
                        helperStyle={
                            !el[0].validation ? { display: 'flex' } : null
                        }
                    />
                );
            })}
            <Button type='submit' text='Sign Up' />
        </form>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps, { registerUser })(SignUp);
