import React from 'react';
import Lobby from 'Lobby';
import Race from 'Race';
import Results from 'Results';


class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // Home
            // ws: new WebSocket('ws://192.168.5.115:8085/mexican/host'),

            // Production
            // ws: new WebSocket('ws://88.159.34.253:8085/mexican/host'),

            // School
            ws: new WebSocket('ws://145.93.61.114:8085/mexican/host'),

            gameId: 'default',
            currentScreen: 'lobby',
        };
        this.state.ws.onopen = () => {
            this.state.ws.send("{'eventType': 'camelraceGameCreate'}");
        };
    }

    handleGameIdReceived(id) {
        this.setState({
            gameId: id
        });
    }

    handleOnStartClick() {
        this.state.ws.send("{'eventType': 'gameStart', 'value': '" + this.state.gameId + "'}");
        this.setState({currentScreen: 'race'});
    }
    handleGameOver(results) {
        this.setState({
            results: results
        });

        this.setState({currentScreen: 'results'});
    }
    handleOnRestartClick() {
        this.state.ws.send("{'eventType': 'gameRestart', 'value': '" + this.state.gameId + "'}");
        this.setState({currentScreen: 'lobby'});
    }

    render() {
        switch (this.state.currentScreen) {
            case 'lobby': {
                return (
                    <Lobby
                        onGameIdReceived={(val) => this.handleGameIdReceived(val)}
                        onStartClick={() => this.handleOnStartClick()}
                        ws={this.state.ws}
                        gameId={this.state.gameId}
                        gameName="CamelRace"
                    />
                );
            }
            case 'race': {
                return (
                    <Race
                        onGameOver={(results) => this.handleGameOver(results)}
                        ws={this.state.ws}
                        gameId={this.state.gameId}
                    />
                );
            }
            case 'results': {
                return (
                    <Results
                        onRestartClick={() => this.handleOnRestartClick()}
                        ws={this.state.ws}
                        results={this.state.results}
                    />
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
