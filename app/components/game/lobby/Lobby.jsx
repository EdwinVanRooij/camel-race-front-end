import React from 'react';
import PageHeader from 'PageHeader';
import LobbyConnectedBox from 'LobbyConnectedBox';
import LobbyStartBox from 'LobbyStartBox';
import LobbyReadyIndicator from 'LobbyReadyIndicator';

class Lobby extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: props.ws,
            players: [],
        };

        this.state.ws.onmessage = (event) => {
            console.log('Message from lobby');
            const obj = JSON.parse(event.data);
            switch (obj.eventType) {
                case 'gameCreated':
                    const gameId = obj.value.id;
                    this.props.onGameIdReceived(gameId);
                    break;
                case 'playerJoined':
                    let newPlayer = {id: obj.value.id, name: obj.value.name};

                    this.state.players.push(newPlayer);
                    this.setState({
                        players: this.state.players
                    });
                    break;
                case 'playerNewBid':
                case 'playerReady':
                    let newPlayer2 = {
                        id: obj.value.player.id,
                        name: obj.value.player.name,
                        bidValue: obj.value.bid.value,
                        cardType: obj.value.bid.type
                    };

                    const newPlayers = [];

                    this.state.players.forEach(function (item, i) {
                        if (item.id === newPlayer2.id) {
                            newPlayers.push(newPlayer2);
                        } else {
                            newPlayers.push(item);
                        }
                    });
                    this.setState({
                        players: newPlayers
                    });
                    break;

                case 'gameReady':
                    console.log('Game is ready!');
                    this.setState({
                        gameReady: true
                    });

                    let seconds = 5;
                    let self = this;
                    setTimeout(function () {
                        if (self.state.gameReady === true) {
                            self.props.onStartClick();
                        }
                    }, seconds * 1000);

                    break;
                case 'playerNotReady':
                    console.log('Game is no longer ready!');
                    this.setState({
                        gameReady: false
                    });
                    break;
                default:
                    console.log('Could not determine eventType \'' + obj.eventType + '\'')
            }
        };
    }

    render() {
        return (
            <div>
                <div>
                    <PageHeader title={'Lobby!'}/>
                </div>
                <div className="row container">
                    <div className="columns small-4 medium-4 large-4 connected-box">
                        <LobbyConnectedBox players={this.state.players}/>
                    </div>
                    <div className="columns small-8 medium-8 large-8 start-box">
                        <LobbyStartBox onStartClick={this.props.onStartClick} gameId={this.props.gameId}/>
                    </div>
                    <div className="columns small-8 medium-8 large-8 ready-indicator">
                        <LobbyReadyIndicator gameReady={this.state.gameReady}/>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Lobby;

