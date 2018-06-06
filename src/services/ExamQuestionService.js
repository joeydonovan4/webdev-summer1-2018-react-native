let _singleton = Symbol();
const HOST = 'https://webdev-java-server.herokuapp.com';
const QUESTION_URI = '/api/questions';

class ExamQuestionService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ExamQuestionService(_singleton);
        return this[_singleton];
    }

    findAllExamQuestions() {
        return fetch(HOST + QUESTION_URI)
            .then(getJSON);
    }

    deleteQuestion(id) {
        return fetch(HOST + QUESTION_URI + '/' + id, {
            method: 'DELETE'
        }).then(getJSON);
    }
}
export default ExamQuestionService;

function getJSON(response) {
    return response.json();
}