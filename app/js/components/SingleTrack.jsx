import React from 'react';
import {serviceRegistry} from '../serviceRegistry';


export class SingleTrack extends React.Component {

    constructor (props) {
        super(props);
        this.song = props.song;
        this.apiProvider = serviceRegistry.get("apiProvider");
        this.state = {wasAdded: false};
    }

    addToQueue() {
        this.apiProvider.addSongToQueue(this.song).then(_ => this.setState({wasAdded: false}));
    }

    render() {
        return (
            <tr>
                <td><img src={this.song.cover_url}></img></td>
                <td>{this.song.title}</td>
                <td>{this.song.artists}</td>
                <td>{this.song.duration}</td>
                <td>
                    <button className={this.state.wasAdded?'added':''} onClick={this.addToQueue.bind(this)}><span></span></button>
                </td>
            </tr>
        )
    }
}
