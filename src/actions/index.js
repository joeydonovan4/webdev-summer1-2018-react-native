import store from '../store/index';
import * as constants from '../constants/index';

const HOST = 'https://webdev-java-server.herokuapp.com';

export const findAllCourses = dispatch => {
    fetch(HOST + '/api/courses')
        .then(getJSON)
        .then(courses => dispatch({
            type: constants.FIND_ALL_COURSES,
            courses: courses
        }));
};

export const findAllModulesForCourse = (dispatch, courseId) => {
    fetch(HOST + '/api/courses/' + courseId + '/modules')
        .then(getJSON)
        .then(modules => dispatch({
            type: constants.FIND_MODULES_FOR_COURSE,
            modules: modules
        }));
}

function getJSON(response) {
    return response.json();
}