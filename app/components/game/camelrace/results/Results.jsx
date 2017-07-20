import React from 'react';
import PageHeader from 'PageHeader';

import RestartBox from 'app/components/game/camelrace/results/RestartBox';
import ResultsBox from 'app/components/game/camelrace/results/ResultsBox';
import PlayerResults from 'app/components/game/camelrace/results/PlayerResults';

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ws: props.ws,
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
                    <PageHeader title={'Results!'}/>
                </div>
                <div className="row container">
                    <div className="results-box  columns small-4 medium-4 large-4 ">
                        <ResultsBox results={this.props.results}/>
                    </div>
                    <div className="player-results-box columns small-8 medium-8 large-8">
                        <PlayerResults results={this.props.results}/>
                    </div>
                    <div className="start-box ">
                        <RestartBox onRestartClick={this.props.onRestartClick} gameId={this.props.gameId}/>
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = Results;
