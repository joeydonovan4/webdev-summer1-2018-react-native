let _singleton = Symbol();
const HOST = 'https://webdev-java-server.herokuapp.com';
const EXAM_URI = '/api/exams';

class ExamService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ExamService(_singleton);
        return this[_singleton];
    }

    findAllExams() {
        return fetch(HOST + EXAM_URI)
            .then(getJSON);
    }
}
export default ExamService;

function getJSON(response) {
    return response.json();
}