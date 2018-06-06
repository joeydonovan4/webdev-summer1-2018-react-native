let _singleton = Symbol();
const HOST = 'https://webdev-java-server.herokuapp.com';
const MODULE_URI = '/api/modules';

class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton];
    }

    findAllModules() {
        return fetch(HOST + MODULE_URI)
            .then(getJSON);
    }

    deleteModule(id) {
        return fetch(HOST + MODULE_URI + '/' + id, {
            method: 'DELETE'
        }).then(getJSON);
    }

    findModuleById(id) {
        return fetch(HOST + MODULE_URI + '/' + id)
            .then(getJSON);
    }

    updateModule(id, mod) {
        return fetch(HOST + MODULE_URI + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mod)
        }).then(getJSON);
    }
}
export default ModuleService;

function getJSON(response) {
    return response.json();
}