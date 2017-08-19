import React from 'react';
import PageHeader from 'PageHeader';

import GameMode from 'GameMode';

class ModeSelection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ws: props.ws,
            normalChosenPlayers: [
                {id: 4, name: 'Edwin'},
            ],
            hardcoreChosenPlayers: [
                {id: 1, name: 'Tom'},
                {id: 2, name: 'Rik'},
                {id: 3, name: 'Bob'},
                ],
        };

        this.state.ws.onmessage = (event) => {
            console.log('Message from results');
            const obj = JSON.parse(event.data);
            switch (obj.eventType) {
                case 'gameRestart':
                    this.props.onRestartClick();
                    break;
                default:
                    console.log('Could not determine eventType \'' + obj.eventType + '\'')
            }
        };
    }

    render () {
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
