import React from 'react';
import {Link, IndexLink} from 'react-router';

class LobbyStartBox extends React.Component {

    render() {

        return (
            <div>
                <h3 className="text-center lobby-box-header game-id">#{this.props.gameId}</h3>
                <button className="large primary expanded button" onClick={this.props.onClick}>Start</button>
            </div>
        )
    }
}

module.exports = LobbyStartBox;

