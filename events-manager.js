export default class EventsManager {
    listeners = {}

    subscribe = (event, callback) => {
        if (!this.listeners[event]) this.listeners[event] = [];

        this.listeners[event].push(callback);
    }

    unsubscribe = (event, callback) => {
        if (!this.listeners[event]) return;

        this.listeners[event] = this.listeners[event].filter(c => c !== callback);
    }

    dispatch = (event, payload) => {
        if (!this.listeners[event]) return;

        this.listeners[event].forEach(callback => callback(payload));
    }
}
