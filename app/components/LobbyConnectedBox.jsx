import React from 'react';

function ConnectedBoxMessage(props) {
    return (

        <div className="box-header lobby-box-header text-center">
            <h3>Connected</h3>
        </div>
    )
}

function PlayerRow(props) {
    return (
        <li>
            {props.name}
        </li>
    )
}

class ConnectedBoxPlayers extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.players.map(player => <PlayerRow key={player.id} name={player.name}/>)}
                </ul>
            </div>
        )
    }
}

function LobbyConnectedBox(props) {
    return (
        <div>
            <ConnectedBoxMessage/>
            <ConnectedBoxPlayers players={props.players}/>
        </div>
    )
}

module.exports = LobbyConnectedBox;

