import { FIND_ALL_COURSES } from '../constants/index';

export const courseReducer = (state = {courses: []}, action) => {
    switch (action.type) {
        case FIND_ALL_COURSES:
            return {
                courses: action.courses
            }
        default:
            return state;
    }
};