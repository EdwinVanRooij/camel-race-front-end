import React from 'react';
import PageHeader from 'PageHeader';

import GameMode from 'GameMode';

class ModeSelection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ws: props.ws,
            normalChosenPlayers: [],
            hardcoreChosenPlayers: [],
        };

        this.state.ws.onmessage = (event) => {
            console.log('Message from mode selection');
            const obj = JSON.parse(event.data);
            switch (obj.eventType) {
                case 'playerGameModeVote':
                    let newPlayer = {id: obj.value.player.id, name: obj.value.player.name};

                    if (obj.value.gameModeOrdinal === 0) {
                        this.state.normalChosenPlayers.push(newPlayer);
                        this.setState({
                            normalChosenPlayers: this.state.normalChosenPlayers
                        });
                    } else if (obj.value.gameModeOrdinal === 1) {
                        this.state.hardcoreChosenPlayers.push(newPlayer);
                        this.setState({
                            hardcoreChosenPlayers: this.state.hardcoreChosenPlayers
                        });
                    } else {
                        console.log('Could not determine which gameMode the ordinal \'' + obj.value.gameModeOrdinal + '\' links to.')
                    }
                    break;

                case 'gameStartedWithState':
                    this.props.onGameStartedWithState(obj.value);
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
                    <PageHeader title={'Game Selection!'}/>
                </div>
                <div className="row container">
                    <div className="columns small-6 medium-6 large-6 game-mode-container">
                        <GameMode title={"Normal"} players={this.state.normalChosenPlayers}/>
                    </div>
                    <div className="columns small-6 medium-4 large-6 game-mode-container">
                        <GameMode title={"Hardcore"} players={this.state.hardcoreChosenPlayers}/>
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = ModeSelection;
