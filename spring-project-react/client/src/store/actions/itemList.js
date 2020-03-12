import { FILL_LIST_UP } from './types';
import fillResponse from '../../middleware/fillListUp';

export const fillListUp = () => async dispatch => {
    

    try {
        const result = await fillResponse();
        result.onload = () => {
            if(result.status === 200) {
                dispatch({
                    type: FILL_LIST_UP,
                    payload: result.response
                })
                console.log(result.response);
            }
        };
    } catch (err) {
        console.error(err);
    }

};