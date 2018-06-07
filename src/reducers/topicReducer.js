import { FIND_TOPICS_FOR_LESSON } from '../constants/index';

export const topicReducer = (state = {topics: [], lesson: {}}, action) => {
    switch (action.type) {
        case FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.topics,
                lesson: action.lesson
            }
        default:
            return state;
    }
};