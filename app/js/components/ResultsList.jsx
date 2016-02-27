import React from 'react';
import {SingleTrack} from './SingleTrack.jsx';


export function ResultsList ({songs}) {
    if (songs.length != 0) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Cover</th>
                        <th>Title</th>
                        <th>Artists</th>
                        <th>Duration</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map(song => <SingleTrack song={song} key={song.uri} />)}
                </tbody>
            </table>
        )
    } else {
        return <div></div>;
    }
}
