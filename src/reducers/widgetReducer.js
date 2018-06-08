import { FIND_WIDGETS_FOR_LESSON_TOPIC, PREVIEW_WIDGET, EXIT_PREVIEW } from '../constants/index';

export const widgetReducer = (state = {widgets: [], topic: {}, previewMode: false, widgetPreview: {}}, action) => {
    switch (action.type) {
        case FIND_WIDGETS_FOR_LESSON_TOPIC:
            return {
                ...state,
                widgets: action.widgets,
                topic: action.topic
            }
        case PREVIEW_WIDGET:
            return {
                ...state,
                widgetPreview: action.widget,
                previewMode: true
            }
        case EXIT_PREVIEW:
            return {
                ...state,
                widgetPreview: {},
                previewMode: false
            }
        default:
            return state;
    }
};