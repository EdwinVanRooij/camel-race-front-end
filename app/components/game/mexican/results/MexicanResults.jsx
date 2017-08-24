import React from 'react';
import PageHeader from 'PageHeader';

import MexicanChickOne from 'MexicanChickOne';
import MexicanChickTwo from 'MexicanChickTwo';

import MexicanLoser from 'MexicanLoser';
import MexicanResultTable from 'MexicanResultTable';

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

    render() {
        return (
            <div>
                <div>
                    <PageHeader title={'Results'}/>
                </div>
                <div className="container">
                    <div className="row">
                        <MexicanLoser name={this.props.results.loser.name} stake={this.props.results.stake}/>
                    </div>
                    <div className="row">
                        <div className="columns small-3 medium-3 large-3">
                            <img src={MexicanChickOne}/>
                        </div>
                        <div className="columns small-6 medium-6 large-6">
                            <MexicanResultTable players={this.props.results.playerResultItems}/>
                        </div>
                        <div className="columns small-3 medium-3 large-3">
                            <img src={MexicanChickTwo}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = Results;
