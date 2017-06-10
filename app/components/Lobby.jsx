import React from 'react';
import LobbyConnectedBox from 'LobbyConnectedBox';
import LobbyStartBox from 'LobbyStartBox';
import PageHeader from 'PageHeader';

class Lobby extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: props.ws,
            gameId: '',
            players: [
                {id: 9001, name: 'Henk', bidValue: '3', cardType: 'hearts'},
                {id: 9002, name: 'Klaas', bidValue: '2', cardType: 'clubs'},
                {id: 9003, name: 'Peter', bidValue: '4', cardType: 'diamonds'},
                {id: 9004, name: 'Jan', bidValue: '5', cardType: 'spades'},
            ],
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
                    let newPlayer2 = {id: obj.value.player.id, name: obj.value.player.name, bidValue: obj.value.bid.value, cardType: obj.value.bid.type};

                    const newPlayers = [];

                    this.state.players.forEach(function(item, i) {
                        if (item.id === newPlayer2.id)  {
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

    handleClick(e) {
        e.preventDefault();

        alert('handling from lobby');
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
                        <LobbyStartBox gameId={this.state.gameId} onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Lobby;
