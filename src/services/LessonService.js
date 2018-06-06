let _singleton = Symbol();
const HOST = 'https://webdev-java-server.herokuapp.com';
const LESSON_URI = '/api/lessons';

class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton];
    }

    findAllLessons() {
        return fetch(HOST + LESSON_URI)
            .then(getJSON);
    }

    deleteLesson(id) {
        return fetch(HOST + LESSON_URI + '/' + id, {
            method: 'DELETE'
        }).then(getJSON);
    }

    findLessonById(id) {
        return fetch(HOST + LESSON_URI + '/' + id)
            .then(getJSON);
    }

    updateLesson(id, lesson) {
        return fetch(HOST + LESSON_URI + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lesson)
        }).then(getJSON);
    }

    createTopic(id, topic) {
        return fetch(HOST + LESSON_URI + '/' + id + '/topics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(topic)
        }).then(getJSON);
    }

    findTopicsByLesson(id) {
        return fetch(HOST + LESSON_URI + '/' + id + '/topics')
            .then(getJSON);
    }

    findWidgetsForLessonTopic(lessonId, topicId) {
        return fetch(HOST + LESSON_URI + '/' + lessonId + '/topics/' + topicId + '/widgets')
            .then(getJSON);
    }
}
export default LessonService;

function getJSON(response) {
    return response.json();
}