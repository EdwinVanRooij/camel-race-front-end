import React from 'react';
import {Link, IndexLink} from 'react-router';

import RunescapeSound from 'RunescapeSound';
import Sound from 'react-sound';

class LobbyStartBox extends React.Component {

    render() {

        return (
            <div>
                <h1 className="text-center lobby-box-header game-id">&rarr;&emsp;{this.props.gameId}&emsp;&larr;</h1>
                <button className="large primary expanded button" onClick={this.props.onStartClick}>Start</button>
                <Sound
                    url={RunescapeSound}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={0}
                />
            </div>
        )
    }
}

module.exports = LobbyStartBox;

