import { REGISTER_USER, LOGIN_USER } from '../actions/types';

const initialState = {
    token: null,
    isAuthenticated: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOGIN_USER:
        case REGISTER_USER:
            return {
                token: payload,
                isAuthenticated: true
            }
        default:
            return state;
    }
    
};