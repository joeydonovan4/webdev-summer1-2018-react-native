import * as constants from '../constants/index';

export const moduleReducer = (state = {modules: [], courseId: 0}, action) => {
    switch (action.type) {
        case constants.FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules,
                courseId: action.courseId
            }
        default:
            return state;
    }
};