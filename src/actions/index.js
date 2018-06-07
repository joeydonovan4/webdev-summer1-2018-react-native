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

export const findAllModulesForCourse = (dispatch, course) => {
    fetch(HOST + '/api/courses/' + course.id + '/modules')
        .then(getJSON)
        .then(modules => dispatch({
            type: constants.FIND_MODULES_FOR_COURSE,
            modules: modules,
            course: course
        }));
}

export const findAllLessonsForModule = (dispatch, courseId, mod) => {
    return fetch(HOST + '/api/courses/' + courseId + '/modules/' + mod.id + '/lessons')
        .then(getJSON)
        .then(lessons => dispatch({
            type: constants.FIND_LESSONS_FOR_MODULE,
            module: mod,
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

export const findAllWidgetsForLessonTopic = (dispatch, lessonId, topic) => {
    return fetch(HOST + '/api/lessons/' + lessonId + '/topics/' + topic.id + '/widgets')
        .then(getJSON)
        .then(widgets => dispatch({
            type: constants.FIND_WIDGETS_FOR_LESSON_TOPIC,
            widgets: widgets,
            topic: topic
        }));
};

function getJSON(response) {
    return response.json();
}