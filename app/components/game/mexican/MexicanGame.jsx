import React from 'react';
import Lobby from 'Lobby';
import DiceGame from 'DiceGame';
import ModeSelection from 'ModeSelection';
import Results from 'Results';


class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: new WebSocket('ws://192.168.5.115:8085/mexican/host'),
            // ws: new WebSocket('ws://88.159.34.253:8085/mexican/host'),
            gameId: 'default',
            currentScreen: 'lobby',
        };
        this.state.ws.onopen = () => {
            this.state.ws.send("{'eventType': 'mexicanGameCreate'}");
        };
    }

    handleGameIdReceived(id) {
        this.setState({
            gameId: id
        });
    }

    handleOnStartClick() {
        this.state.ws.send("{'eventType': 'gameStart', 'value': '" + this.state.gameId + "'}");
        this.setState({currentScreen: 'game'});
        // this.setState({currentScreen: 'mode-selection'});
    }

    handleModeSelected(mode) {
        this.setState({
            mode: mode,
            currentScreen: 'race'
        });
    }

    handleGameOver(results) {
        this.setState({
            results: results,
            currentScreen: 'results',
        });
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
                        gameName="Mexican"
                    />
                );
            }
            case 'mode-selection': {
                return (
                    <ModeSelection
                        onModeSelected={(mode) => this.handleModeSelected(mode)}
                        ws={this.state.ws}
                        gameId={this.state.gameId}
                    />
                );
            }
            case 'game': {
                return (
                    <DiceGame
                        onGameOver={(results) => this.handleGameOver(results)}
                        mode={this.state.mode}
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
