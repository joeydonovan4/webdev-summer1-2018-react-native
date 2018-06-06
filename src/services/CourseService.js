let _singleton = Symbol();
const HOST = 'https://webdev-java-server.herokuapp.com';
const COURSE_URI = '/api/courses';

class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton];
    }

    createCourse(course) {
        return fetch(HOST + COURSE_URI, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(getJSON);
    }

    deleteCourse(id) {
        return fetch(HOST + COURSE_URI + '/' + id, {
            method: 'DELETE'
        }).then(getJSON);
    }

    findAllCourses() {
        return fetch(HOST + COURSE_URI)
            .then(getJSON);
    }

    findCourseById(id) {
        return fetch(HOST + COURSE_URI + '/' + id)
            .then(getJSON);
    }

    updateCourse(id, course) {
        return fetch(HOST + COURSE_URI + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        }).then(getJSON);
    }

    createModule(id, mod) {
        return fetch(HOST + COURSE_URI + '/' + id + '/modules', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mod)
        }).then(getJSON);
    }

    findAllModulesForCourse(id) {
        return fetch(HOST + COURSE_URI + '/' + id + '/modules')
            .then(getJSON);
    }

    createLesson(course_id, module_id, lesson) {
        return fetch(HOST + COURSE_URI + '/' + course_id + '/modules/' +
            module_id + '/lessons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(lesson)
        }).then(getJSON);
    }

    findAllLessonsForModule(course_id, module_id) {
        return fetch(HOST + COURSE_URI + '/' + course_id + '/modules/' +
            module_id + '/lessons')
            .then(getJSON);
    }
}
export default CourseService;

function getJSON(response) {
    return response.json();
}