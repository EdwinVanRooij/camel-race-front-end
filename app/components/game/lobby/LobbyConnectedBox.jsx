import React from 'react';

function ConnectedBoxMessage(props) {
    return (

        <div className="box-header lobby-box-header text-center">
            <h3>Connected</h3>
        </div>
    )
}

class PlayerRow extends React.Component {

    // name={player.name}
    // bidValue={player.bidValue}
    // cardType={capitalize(player.cardType)}

    render() {
        if (this.props.player.bidValue) {
            return (
                <li className="bid">
                    <h4>
                        {this.props.player.name}: {this.props.player.bidValue} on {capitalize(this.props.player.cardType)}
                    </h4>
                </li>
            )
        } else {
            return (
                <li className="connected">
                    <h4>
                    {this.props.player.name}
                    </h4>
                </li>
            )
        }
    }
}

class ConnectedBoxPlayers extends React.Component {
    render() {
        return (
            <div>
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
function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
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

