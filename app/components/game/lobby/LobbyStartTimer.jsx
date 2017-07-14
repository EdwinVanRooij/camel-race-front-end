import React from 'react';
import {Link, IndexLink} from 'react-router';

class LobbyStartBox extends React.Component {

    render() {
        return (
            <div>
                <button className="large primary expanded button" onClick={this.props.onStartClick}>Start</button>
            </div>
        )
    }
}

module.exports = LobbyStartBox;

