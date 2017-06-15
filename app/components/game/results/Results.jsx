import React from 'react';
import PageHeader from 'PageHeader';

import RestartBox from 'RestartBox';
import ResultsBox from 'ResultsBox';
import PlayerResults from 'PlayerResults';

class Results extends React.Component {

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
