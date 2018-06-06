let _singleton = Symbol();
const HOST = 'https://webdev-java-server.herokuapp.com';
const ASSIGNMENT_URI = '/api/assignments';

class AssignmentService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new AssignmentService(_singleton);
        return this[_singleton];
    }

    findAllAssignments() {
        return fetch(HOST + ASSIGNMENT_URI)
            .then(getJSON);
    }
}
export default AssignmentService;

function getJSON(response) {
    return response.json();
}