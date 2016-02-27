import React from 'react';
import {serviceRegistry} from '../serviceRegistry';


export class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.currentSongChangesListener = serviceRegistry.get("currentSongChangesListener");
        this.currentSongChangesListener.addListener(this.songChanged.bind(this));
        this.state = {
            currentSong: null
        };
    }

    songChanged(newSong) {
        this.setState({currentSong: newSong.title})
    }

    render() {
        return (
            <header className="page-header">
                <div className="wrapper">
                    <span className="title">SpotiQue</span>
                    <span className="current-song">{this.state.currentSong}</span>
                </div>
            </header>
        )
    }
}
