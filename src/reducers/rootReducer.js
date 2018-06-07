import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer';
import { moduleReducer } from './moduleReducer';
import { lessonReducer } from './lessonReducer';
import { topicReducer } from "./topicReducer";
import { widgetReducer } from "./widgetReducer";

export const rootReducer = combineReducers({
    courseReducer,
    moduleReducer,
    lessonReducer,
    topicReducer,
    widgetReducer
});