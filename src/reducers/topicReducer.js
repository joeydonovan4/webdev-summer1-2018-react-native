import { FIND_TOPICS_FOR_LESSON } from '../constants/index';

export const topicReducer = (state = {topics: [], lessonId: 0}, action) => {
    switch (action.type) {
        case FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.topics,
                lessonId: action.lessonId
            }
        default:
            return state;
    }
};