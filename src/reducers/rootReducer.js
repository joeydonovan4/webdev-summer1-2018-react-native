import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer';
import { moduleReducer } from './moduleReducer';
import { lessonReducer } from './lessonReducer';

export const rootReducer = combineReducers({
    courseReducer,
    moduleReducer,
    lessonReducer
});