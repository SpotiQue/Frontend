import ReconnectingWebSocket from 'reconnectingwebsocket';


class WebsocketListener {
    constructor(url) {
        this.url = WebsocketListener.constructUrl(url);
        this.webSocket = null;
        this.listeners = [];
    }

    static constructUrl(url) {
        const currentLocation = window.location;
        let newUri = null;
        if (currentLocation.protocol === "https:") {
            newUri = "wss://";
        } else {
            newUri = "ws://";
        }
        return newUri + currentLocation.host + /websocket/ + url;
    }

    addListener (fn) {
        if (!this.webSocket) {
            this.webSocket = new ReconnectingWebSocket(this.url);
            this.webSocket.onmessage = this.notify.bind(this);
        }
        this.listeners.push(fn);
    }

    notify (data) {
        data = JSON.parse(data.data);
        for (let listener in this.listeners) {
            this.listeners[listener](data);
        }
    }
}


export class QueueChangesListener extends WebsocketListener {
    constructor () {
        super("queue");
    }
}

export class CurrentSongChangesListener extends WebsocketListener {
    constructor () {
        super("current_song");
    }
}
