import React from 'react';
import {Link, IndexLink} from 'react-router';

class PlayerRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.player.name}</td>
                <td>{this.props.player.score}</td>
            </tr>
        )
    }
}

class MexicanResultTable extends React.Component {

    renderPlayers() {
        return (
            <tbody>
            {
                this.props.players.map(player =>
                        <PlayerRow
                            key={player.id}
                            player={player}
                        />
                )
            }
            </tbody>
        );
    }

    render() {

        return (
            <div className="mexican-result-table">
                <table className="unstriped">
                    <thead>
                    <tr>
                        <th width="300">😃</th>
                        <th width="150">⚁ ⚃</th>
                    </tr>
                    </thead>
                    {this.renderPlayers()}
                </table>
            </div>
        )
    }
}

module.exports = MexicanResultTable;
