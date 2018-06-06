let _singleton = Symbol();
const HOST = 'https://webdev-java-server.herokuapp.com';
const TOPIC_URI = '/api/topics';

class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton];
    }

    findAllTopics() {
        return fetch(HOST + TOPIC_URI)
            .then(getJSON);
    }

    saveAllWidgets(topicId, widgets) {
        return fetch(HOST + TOPIC_URI + '/' + topicId + '/widgets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(widgets)
        }).then(getJSON);
    }

    updateAssignment(topicId, assignmentId, assignment) {
        return fetch(HOST + TOPIC_URI + '/' + topicId + '/assignments/' + assignmentId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(assignment)
        }).then(getJSON);
    }

    createExamQuestion(topicId, examId, question) {
        return fetch(HOST + TOPIC_URI + '/' + topicId + '/exams/' + examId + '/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(question)
        }).then(getJSON);
    }

    findAllExamQuestionsForTopicExam(topicId, examId) {
        return fetch(HOST + TOPIC_URI + '/' + topicId + '/exams/' + examId + '/questions')
            .then(getJSON);
    }
}
export default TopicService;

function getJSON(response) {
    return response.json();
}