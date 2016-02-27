import React from 'react';
import {serviceRegistry} from '../serviceRegistry';


function QueueEntry ({song}) {
    return (
        <tr>
            <td>{song.title}</td>
            <td>{song.artists}</td>
        </tr>
    );
}

export class QueueComponent extends React.Component {

    constructor(props) {
        super(props);
        this.queueChangesListener = serviceRegistry.get("queueChangesListener");
        this.queueChangesListener.addListener(this.queueChanged.bind(this));

        this.state = {queue: []};
    }

    queueChanged(newQueue) {
        this.setState({queue: newQueue});
    }

    render() {

        let content = null;

        if (!!this.state.queue.length) {
            content = (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artists</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.queue.map(song => <QueueEntry song={song} key={song.uri} />)}
                    </tbody>
                </table>
            );
        } else {
            content = (
                <div>
                    <p>There are no songs in the queue.</p>
                    <p>Songs will be played randomly from the ones queued in the past.</p>
                </div>
            );
        }

        return (
            <div className="queue">
                <header>Queue</header>
                {content}
            </div>
        )
    }
}
