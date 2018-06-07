import * as constants from '../constants/index';

export const lessonReducer = (state = {lessons: []}, action) => {
    switch (action.type) {
        case constants.FIND_LESSONS_FOR_MODULE:
            return {
                lessons: action.lessons
            }
        default:
            return state;
    }
};