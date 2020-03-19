import { REGISTER_USER, LOGIN_USER, LOAD_USER, LOGOUT_USER } from './types';
import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';

export const registerUser = (body) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const result = await axios.post('/signup', body, config);
        dispatch({
            type: REGISTER_USER,
            payload: result.data.token
        })
        return true;
    } catch (error) {
        return false;
    }

};

export const loginUser = (body) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const result = await axios.post('/login', body, config);
        if(result.status === 200) {
            dispatch({
                type: LOGOUT_USER,
                payload: result.data.token
            })
        };
        console.log('User logged in!');
    } catch (error) {
        console.log(error);
    }

};

export const loadUser = () => dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    dispatch({
        type: LOAD_USER
    });
};

export const logoutUser = () => dispatch => {
    dispatch({
        type: LOGOUT_USER
    })
};