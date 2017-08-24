import React from 'react';

class PlayerRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.score}</td>
            </tr>
        )
    }
}

class MexicanResultTable extends React.Component {

    renderPlayers() {
        return (
            <tbody>
            {
                this.props.players.map(playerItem =>
                        <PlayerRow
                            key={playerItem.player.id}
                            name={playerItem.player.name}
                            score={playerItem.score}
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
