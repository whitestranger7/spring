import axios from 'axios';

import { FILL_LIST_UP } from './types';

export const fillListUp = () => async dispatch => {
    try {
        const result = await axios.get('/list');
        if(result.status === 200) {
            dispatch({
                type: FILL_LIST_UP,
                payload: result.data
            });
        }
    } catch (err) {
        console.error(err);
    }
};