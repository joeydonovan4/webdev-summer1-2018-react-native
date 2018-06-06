let _singleton = Symbol();
const HOST = 'https://webdev-java-server.herokuapp.com';
const WIDGET_URI = '/api/widgets';

class WidgetService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new WidgetService(_singleton);
        return this[_singleton];
    }

    findAllWidgets() {
        return fetch(HOST + WIDGET_URI)
            .then(getJSON);
    }

    deleteWidget(id) {
        return fetch(HOST + WIDGET_URI, {
            method: 'DELETE'
        }).then(getJSON);
    }

    findWidgetById(id) {
        return fetch(HOST + WIDGET_URI + '/' + id)
            .then(getJSON);
    }

    updateWidget(id, widget) {
        return fetch(HOST + WIDGET_URI + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(widget)
        }).then(getJSON);
    }
}
export default WidgetService;

function getJSON(response) {
    return response.json();
}