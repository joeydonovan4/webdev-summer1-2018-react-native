import { FIND_LESSONS_FOR_MODULE } from '../constants/index';

export const lessonReducer = (state = {lessons: [], moduleId: 0}, action) => {
    switch (action.type) {
        case FIND_LESSONS_FOR_MODULE:
            return {
                lessons: action.lessons,
                moduleId: action.moduleId
            }
        default:
            return state;
    }
};