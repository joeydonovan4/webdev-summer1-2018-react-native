import { FIND_LESSONS_FOR_MODULE } from '../constants/index';

export const lessonReducer = (state = {lessons: [], module: {}}, action) => {
    switch (action.type) {
        case FIND_LESSONS_FOR_MODULE:
            return {
                lessons: action.lessons,
                module: action.module
            }
        default:
            return state;
    }
};