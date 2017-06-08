import React from 'react';
import LobbyConnectedBox from 'LobbyConnectedBox';
import LobbyStartBox from 'LobbyStartBox';
import PageHeader from 'PageHeader';

class Lobby extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: new WebSocket('ws://192.168.5.115:8082/host'),
            gameId: '',
            players: [
                {id: 5, name: 'Henk'},
                {id: 2, name: 'Klaas'},
                {id: 3, name: 'Peter'},
                {id: 4, name: 'Jan'},
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
                    this.state.players.push(obj.value);
                    this.setState({
                        players: this.state.players
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
