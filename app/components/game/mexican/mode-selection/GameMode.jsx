import React from 'react';

function Title(props) {
    return (
        <div className="title">
            <h2>{props.title}</h2>
        </div>
    )
}

class PlayerRow extends React.Component {
    render() {
        return (
            <li>
                {this.props.player.name}
            </li>
        )
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <ul>
                    {
                        this.props.players.map(player =>
                            <PlayerRow
                                key={player.id}
                                player={player}
                            />
                        )
                    }
                </ul>
            </div>
        )
    }
}

class GameMode extends React.Component {

    render() {
        return (
            <div className="game-mode">
                <Title title={this.props.title}/>
                <Body players={this.props.players}/>
            </div>
        )
    }
}

module.exports = GameMode;

