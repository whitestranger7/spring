import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, LOAD_USER } from '../actions/types';

const initialState = {
    isAuthenticated: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOGIN_USER:
        case REGISTER_USER:
            localStorage.setItem('token', payload);
            return {
                isAuthenticated: true
            }
        case LOAD_USER:
            return {
                isAuthenticated: true
            }
        case LOGOUT_USER:
            localStorage.removeItem('token');
            return{
                isAuthenticated: false
            }
        default:
            return state;
    }
    
};