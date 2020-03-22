import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import { FILL_LIST_UP } from './types';

export const fillListUp = () => async dispatch => {
    setAuthToken(localStorage.getItem('token'));
    try {
        const result = await axios.get('/list');
        if (result.status === 200) {
            dispatch({
                type: FILL_LIST_UP,
                payload: result.data
            });
        }
    } catch (err) {
        console.error('Access denied. Please authorize');
    }
};
