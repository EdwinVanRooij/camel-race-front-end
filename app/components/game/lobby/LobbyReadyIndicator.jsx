import React from 'react';
import {Link, IndexLink} from 'react-router';

import Ready from "Ready";
import Waiting from "Waiting";

function ReadyIndicator(props) {
    return (
        <div className="ready-indicator-image">
            <img src={Ready}/>
        </div>
    )
}
// <img src={cardToUrl.cardToUrl(props.sideCard.cardType, props.sideCard.cardValue)}/>

function NotReadyIndicator(props) {
    return (
        <div className="ready-indicator-image">
            <img src={Waiting}/>
        </div>
    )
}


class LobbyReadyIndicator extends React.Component {
    render() {
        if (this.props.gameReady) {
            return <ReadyIndicator/>
        }
        else {
            return <NotReadyIndicator/>
        }
    }
}

module.exports = LobbyReadyIndicator;

