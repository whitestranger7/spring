import { REGISTER_USER, LOGOUT_USER } from './types';
import axios from 'axios';

export const registerUser = (body) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const result = await axios.post('/signup', body, config);
        if(result.status === 200) {
            dispatch({
                type: REGISTER_USER,
                payload: result.data.token
            })
        };
        console.log('User registered!');
    } catch (error) {
        console.log(error);
    }

};

export const logoutUser = () => dispatch => {
    dispatch({
        type: LOGOUT_USER
    })
};