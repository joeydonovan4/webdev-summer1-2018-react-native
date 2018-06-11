import {
    FILTER_ASSIGNMENTS,
    ADD_ASSIGNMENT,
    ASSIGNMENT_NAME_UPDATED,
    ASSIGNMENT_TITLE_UPDATED,
    ASSIGNMENT_POINTS_UPDATED,
    ASSIGNMENT_TEXT_UPDATED,
    ASSIGNMENT_DESCRIPTION_UPDATED,
    ASSIGNMENT_LINK_UPDATED,
    SUBMIT_ASSIGNMENT
} from '../constants/index';

export const assignmentReducer = (state = {assignments: []}, action) => {
    switch (action.type) {
        case FILTER_ASSIGNMENTS:
            return {
                assignments: action.widgets.filter((widget) => {
                    return widget.widgetType === 'Assignment';
                })
            }
        case ADD_ASSIGNMENT:
            return {
                assignments: [
                    ...state.assignments,
                    {
                        id: state.assignments.length + 1,
                        widgetType: 'Assignment',
                        name: '',
                        order: state.assignments.slice(-1).order + 1
                    }
                ]
            }
        case ASSIGNMENT_NAME_UPDATED:
            return {
                assignments: state.assignments.map((assignment) => {
                    if (assignment.id === action.id) {
                        assignment.name = action.name
                    }
                    return Object.assign({}, assignment);
                })
            }
        case ASSIGNMENT_TITLE_UPDATED:
            return {
                assignments: state.assignments.map((assignment) => {
                    if (assignment.id === action.id) {
                        assignment.title = action.title
                    }
                    return Object.assign({}, assignment);
                })
            }
        case ASSIGNMENT_POINTS_UPDATED:
            return {
                assignments: state.assignments.map((assignment) => {
                    if (assignment.id === action.id) {
                        assignment.points = action.points
                    }
                    return Object.assign({}, assignment);
                })
            }
        case ASSIGNMENT_DESCRIPTION_UPDATED:
            return {
                assignments: state.assignments.map((assignment) => {
                    if (assignment.id === action.id) {
                        assignment.description = action.description
                    }
                    return Object.assign({}, assignment);
                })
            }
        case ASSIGNMENT_TEXT_UPDATED:
            return {
                assignments: state.assignments.map((assignment) => {
                    if (assignment.id === action.id) {
                        assignment.text = action.text
                    }
                    return Object.assign({}, assignment);
                })
            }
        case ASSIGNMENT_LINK_UPDATED:
            return {
                assignments: state.assignments.map((assignment) => {
                    if (assignment.id === action.id) {
                        assignment.link = action.link
                    }
                    return Object.assign({}, assignment);
                })
            }
        default:
            return state;
    }
};