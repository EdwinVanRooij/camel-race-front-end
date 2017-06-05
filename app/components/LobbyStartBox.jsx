import React from 'react';
import {Link, IndexLink} from 'react-router';

class LobbyStartBox extends React.Component {

    render() {

        return (
            <div>
                <h3 className="text-center lobby-box-header game-id">#{this.props.gameId}</h3>
                <Link to="game">
                    <button className="large primary expanded button">Start</button>
                </Link>
            </div>
        )
    }
}

module.exports = LobbyStartBox;

