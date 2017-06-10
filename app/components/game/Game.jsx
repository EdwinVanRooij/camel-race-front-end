import React from 'react';
import Lobby from 'Lobby';
import Race from 'Race';

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: new WebSocket('ws://192.168.5.115:8082/host'),
            gameId: 'default',
            currentScreen: 'lobby',
        };
        this.state.ws.onopen = () => {
            this.state.ws.send("{'eventType': 'gameCreate'}");
        };
    }

    handleGameIdReceived(id) {
        this.setState({
            gameId: id
        });
    }

    handleOnStartClick() {
        this.setState({currentScreen: 'race'});
    }

    render() {
        switch (this.state.currentScreen) {
            case 'lobby': {
                return (
                    <div>
                        <Lobby onGameIdReceived={(val) => this.handleGameIdReceived(val)} onStartClick={() => this.handleOnStartClick()} ws={this.state.ws} gameId={this.state.gameId}/>
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
                        <Lobby onStartClick={() => this.handleOnStartClick()} gameId={this.state.gameId}/>
                    </div>
                );
            }
            default: {
                console.log('Could not find out which screen to be at, it\'s ' + this.state.currentScreen + ' rn');
                break;
            }
        }
    }
}

module.exports = Game;
