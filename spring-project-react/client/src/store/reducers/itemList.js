// import bootIcon from '../../config/img/spring-boot-icon.svg';
// import springIcon from '../../config/img/spring-logo-icon.svg';
// import dataIcon from '../../config/img/spring-data-icon.svg';
// import cloudIcon from '../../config/img/spring-cloud-icon.svg';

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