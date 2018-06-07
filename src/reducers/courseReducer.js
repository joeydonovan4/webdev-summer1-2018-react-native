import * as constants from '../constants/index';

export const courseReducer = (state = {courses: []}, action) => {
    switch (action.type) {
        case constants.FIND_ALL_COURSES:
            state.courses = action.courses;
            return state;
        default:
            return state;
    }
};