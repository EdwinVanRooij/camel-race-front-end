import React from 'react';

class PlayerRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.player.name}</td>
                <td>{this.props.score}</td>
                <td>{this.props.throwsLeft}</td>
            </tr>
        )
    }
}

class MexicanPlayerTable extends React.Component {

    renderPlayers() {
        return (
            <tbody>
            {
                this.props.players.map(player =>
                    <PlayerRow
                        key={player.player.id}
                        player={player.player}
                        score={player.score}
                        throwsLeft={player.throwsLeft}
                    />
                )
            }
            </tbody>
        );
    }

    render() {

        return (
            <div>
                <table className="unstriped">
                    <thead>
                    <tr>
                        <th width="300">😃</th>
                        <th width="150">⚁ ⚃</th>
                        <th width="150">⌛</th>
                    </tr>
                    </thead>
                    {this.renderPlayers()}
                </table>
            </div>
        )
    }
}

module.exports = MexicanPlayerTable;
