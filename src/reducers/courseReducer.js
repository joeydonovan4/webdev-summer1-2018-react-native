import * as constants from '../constants/index';

export const courseReducer = (state = {courses: []}, action) => {
    switch (action.type) {
        case constants.FIND_ALL_COURSES:
            return {
                courses: action.courses
            }
        default:
            return state;
    }
};