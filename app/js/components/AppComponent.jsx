import React from 'react';
import {FooterComponent} from './FooterComponent.jsx';
import {HeaderComponent} from './HeaderComponent.jsx';
import {QueueComponent} from './QueueComponent.jsx';
import {SearchComponent} from './SearchComponent.jsx';


export function AppComponent() {

    return (
        <div>
            <HeaderComponent />
            <div className="application-body">
                <SearchComponent />
                <QueueComponent />
            </div>
            <FooterComponent />
        </div>
    )
}
