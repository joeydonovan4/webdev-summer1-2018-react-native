import { FILTER_ASSIGNMENTS } from '../constants/index';

export const assignmentReducer = (state = {assignments: []}, action) => {
    switch (action.type) {
        case FILTER_ASSIGNMENTS:
            return {
                assignments: action.widgets.filter((widget) => {
                    return widget.widgetType === 'Assignment';
                })
            }
        default:
            return state;
    }
};