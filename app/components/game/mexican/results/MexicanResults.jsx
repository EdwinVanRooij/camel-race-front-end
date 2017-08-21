import React from 'react';
import PageHeader from 'PageHeader';

import MexicanLoser from 'MexicanLoser';
import MexicanResultTable from 'MexicanResultTable';

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ws: props.ws,
            players: [],
        };

        let newPlayer = {id: 1, name: 'Rik', score: 42};
        let newPlayer2 = {id: 2, name: 'Edwin', score: 600};
        this.state.players.push(newPlayer);
        this.state.players.push(newPlayer2);
        this.setState({
            players: this.state.players
        });


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
                        <MexicanLoser name={'Rik'} stake={5}/>
                    </div>
                    <div className="row">
                        <MexicanResultTable players={this.state.players} stake={5}/>
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = Results;
