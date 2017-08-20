import React from 'react';
import {Link, IndexLink} from 'react-router';

class MexicanResultTable extends React.Component {

    render() {

        return (
            <div className="mexican-result-table">
                <ul>
                    {
                        this.props.players.map(player =>
                            <h1>Hi</h1>
                            // <PlayerRow
                                // key={player.id}
                                // player={player}
                            // />
                        )
                    }
                </ul>
            </div>
        )
    }
}

module.exports = MexicanResultTable;
