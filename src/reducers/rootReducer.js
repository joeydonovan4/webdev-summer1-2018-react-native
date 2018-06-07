import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer';
import { moduleReducer } from './moduleReducer';

export const rootReducer = combineReducers({
    courseReducer,
    moduleReducer
});