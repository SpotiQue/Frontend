import React from 'react';
import {deferize} from '../utils';
import {serviceRegistry} from '../serviceRegistry';
import {ResultsList} from './ResultsList.jsx';


export class SearchComponent extends React.Component {

    constructor (props) {
        super(props);
        this.apiProvider = serviceRegistry.get("apiProvider");
        this.state = {songs: []};
    }

    render() {
        return (
            <div className="search">
                <input onChange={this.inputChanged.bind(this)} type="text" />
                <ResultsList songs={this.state.songs} />
            </div>
        );
    }

    inputChanged(event) {
        const query = event.target.value;
        this.apiProvider.findSongs(event.target.value).then(songs => {
            this.setState({songs});
        })
    }
}
