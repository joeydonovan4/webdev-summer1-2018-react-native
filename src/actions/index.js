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
            modules: modules,
            courseId: courseId
        }));
}

export const findAllLessonsForModule = (dispatch, courseId, moduleId) => {
    return fetch(HOST + '/api/courses/' + courseId + '/modules/' + moduleId + '/lessons')
        .then(getJSON)
        .then(lessons => dispatch({
            type: constants.FIND_LESSONS_FOR_MODULE,
            moduleId: moduleId,
            lessons: lessons
        }));
};

export const findAllTopicsForLesson = (dispatch, lesson) => {
    return fetch(HOST + '/api/lessons/' + lesson.id + '/topics')
        .then(getJSON)
        .then(topics => dispatch({
            type: constants.FIND_TOPICS_FOR_LESSON,
            topics: topics,
            lesson: lesson
        }));
}

function getJSON(response) {
    return response.json();
}