import { FIND_WIDGETS_FOR_LESSON_TOPIC } from '../constants/index';

export const widgetReducer = (state = {widgets: [], topic: {}}, action) => {
    switch (action.type) {
        case FIND_WIDGETS_FOR_LESSON_TOPIC:
            return {
                widgets: action.widgets,
                topic: action.topic
            }
        default:
            return state;
    }
};