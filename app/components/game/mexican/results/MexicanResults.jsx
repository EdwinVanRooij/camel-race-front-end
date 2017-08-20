import React from 'react';
import PageHeader from 'PageHeader';

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
                        <MexicanLoser name={'Rik'} stake={5}/>
                    </div>
                    <div className="row">
                        <MexicanResultTable players={[]} stake={5}/>
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = Results;
