import { FILL_LIST_UP } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FILL_LIST_UP:
            return [
                ...payload
            ]
        default:
            return state
    }
};