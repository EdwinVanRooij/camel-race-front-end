import React from 'react';
import PageHeader from 'PageHeader';

import RestartBox from 'RestartBox';
import ResultsBox from 'ResultsBox';

class Results extends React.Component {

    render () {
        return (
            <div>
                <div>
                    <PageHeader title={'Results!'}/>
                </div>
                <div className="row container">
                    <div className="results-box">
                        <ResultsBox results={this.props.results}/>
                    </div>
                    <div className="start-box">
                        <RestartBox onStartClick={this.props.onRestartClick} gameId={this.props.gameId}/>
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = Results;
