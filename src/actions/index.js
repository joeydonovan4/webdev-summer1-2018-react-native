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

export const showWidgetPreview = (dispatch, widget) => (
    dispatch({
        type: constants.PREVIEW_WIDGET,
        widget: widget
    })
);

export const exitPreview = dispatch => (
    dispatch({type: constants.EXIT_PREVIEW})
);

export const filterAssignmentsFromWidgets = (dispatch, widgets) => (
    dispatch({
        type: constants.FILTER_ASSIGNMENTS,
        widgets: widgets
    })
)

export const getPreviewingAssignment = (dispatch, id) => (
    dispatch({type: 'GET_PREVIEWING_ASSIGNMENT'})
);

export const togglePreview = (dispatch, id) => (
    dispatch({type: constants.SHOW_ASSIGNMENT_PREVIEW, id: id})
);

export const addAssignment = dispatch => (
    dispatch({type: constants.ADD_ASSIGNMENT})
);

export const assignmentNameUpdated = (dispatch, id, name) => (
    dispatch({
        type: constants.ASSIGNMENT_NAME_UPDATED,
        id: id,
        name: name
    })
);

export const assignmentTitleUpdated = (dispatch, id, title) => (
    dispatch({
        type: constants.ASSIGNMENT_TITLE_UPDATED,
        id: id,
        title: title
    })
);

export const assignmentPointsUpdated = (dispatch, id, points) => (
    dispatch({
        type: constants.ASSIGNMENT_TITLE_UPDATED,
        id: id,
        points: points
    })
);

export const assignmentDescriptionUpdated = (dispatch, id, description) => (
    dispatch({
        type: constants.ASSIGNMENT_DESCRIPTION_UPDATED,
        id: id,
        description: description
    })
);

export const assignmentTextUpdated = (dispatch, id, text) => (
    dispatch({
        type: constants.ASSIGNMENT_TEXT_UPDATED,
        id,
        text
    })
);

export const assignmentLinkUpdated = (dispatch, id, link) => (
    dispatch({
        type: constants.ASSIGNMENT_LINK_UPDATED,
        id,
        link
    })
);

export const createWidget = (dispatch, lessonId, topicId, widget) => {
    return fetch(HOST + '/api/lessons/' + lessonId + '/topics/' + topicId + '/widgets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(widget)
    }).then(getJSON).then(newWidget => dispatch({

    }));
}

function getJSON(response) {
    return response.json();
}