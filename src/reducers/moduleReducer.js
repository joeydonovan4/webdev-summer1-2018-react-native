import * as constants from '../constants/index';

export const moduleReducer = (state = {modules: []}, action) => {
    switch (action.type) {
        case constants.FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            }
        default:
            return state;
    }
};