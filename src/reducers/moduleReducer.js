import { FIND_MODULES_FOR_COURSE } from '../constants/index';

export const moduleReducer = (state = {modules: [], course: {}}, action) => {
    switch (action.type) {
        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules,
                course: action.course
            }
        default:
            return state;
    }
};