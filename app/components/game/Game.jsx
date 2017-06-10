import React from 'react';
import Lobby from 'Lobby';
import Race from 'Race';

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: new WebSocket('ws://192.168.5.115:8082/host'),
            gameId: '',
            players: [
                {id: 9001, name: 'Henk', bidValue: '3', cardType: 'hearts'},
                {id: 9002, name: 'Klaas', bidValue: '2', cardType: 'clubs'},
                {id: 9003, name: 'Peter', bidValue: '4', cardType: 'diamonds'},
                {id: 9004, name: 'Jan', bidValue: '5', cardType: 'spades'},
            ],
            currentScreen: 'lobby'
        };
        this.state.ws.onopen = () => {
            this.state.ws.send("{'eventType': 'gameCreate'}");
        };

        this.state.ws.onmessage = (event) => {
            const obj = JSON.parse(event.data);
            switch (obj.eventType) {
                case 'gameCreated':
                    this.setState({
                        gameId: obj.value.id
                    });
                    break;
                case 'playerJoined':
                    let newPlayer = {id: obj.value.id, name: obj.value.name};
                    // let newPlayer = {id: obj.value.id, name: obj.value.name, bidValue: '-', cardType: '-'};

                    this.state.players.push(newPlayer);
                    this.setState({
                        players: this.state.players
                    });
                    break;
                case 'playerNewBid':
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
                default:
                    alert('Could not determine eventType \'' + obj.eventType + '\'')
            }
        };
    }

    handleOnStartClick() {
        this.setState({currentScreen: 'race'});
    }

    render() {
        switch (this.state.currentScreen) {
            case 'lobby': {
                return (
                    <div>
                        <Lobby onStartClick={() => this.handleOnStartClick()} players={this.state.players}
                               gameId={this.state.gameId}/>
                    </div>
                );
            }
            case 'race': {
                return (
                    <div>
                        <Race/>
                    </div>
                );
            }
            case 'results': {
                return (
                    <div>
                        <Lobby onStartClick={() => this.handleOnStartClick()} players={this.state.players}
                               gameId={this.state.gameId}/>
                    </div>
                );
            }
            default: {
                //statements;
                alert('Could not find out which screen to be at, it\'s ' + this.state.currentScreen + ' rn');
                break;
            }
        }
    }
}

module.exports = Game;
