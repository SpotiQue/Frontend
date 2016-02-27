import {deferize} from '../utils';


export class ApiProvider {

    constructor (jQuery) {
        this.jQuery = jQuery;
        this.baseUrl = "/api/";

        this.findSongs = deferize(this.findSongs.bind(this), 500);
    }

    findSongs (query) {
        if (!query) {
            return Promise.resolve([])
        }
        return new Promise(resolve => {
            this.jQuery.ajax({
                url: this.baseUrl + "search",
                data: {q: query},
                success: resolve,
                method: "GET"
            })
        })
    }

    addSongToQueue(song) {
        return new Promise(resolve => {
            this.jQuery.ajax({
                url: this.baseUrl + "queue",
                data: JSON.stringify({uri: song.uri}),
                contentType: "application/json",
                success: resolve,
                method: "POST"
            });
        });
    }
}
