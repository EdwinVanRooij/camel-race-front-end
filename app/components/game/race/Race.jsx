import React from 'react';
import PageHeader from 'PageHeader';

import SideCardsBox from 'SideCardsBox';
import DeckBox from 'DeckBox';
import CamelsBox from 'CamelsBox';

class Race extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: props.ws,
            gameState: {},
        };

        this.state.ws.onmessage = (event) => {
            console.log('Message from race');
            const obj = JSON.parse(event.data);
            switch (obj.eventType) {
                case 'gameStartedWithState':
                    console.log('Message from gameStartedWithState');
                    this.setState({
                        gameState: obj.value
                    });
                    break;
                case 'newRound':
                    console.log('Message from newRound');
                    this.setState({
                        gameState: obj.value
                    });
                    break;
                case 'gameOverAllResults':
                    console.log('Message from gameOverAllResults');
                    // alert('Game over!');
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
                    <PageHeader title={'Race!'}/>
                </div>
                <div className="row container">
                    <div className="columns small-2 medium-2 large-2">
                        <SideCardsBox sideCardList={this.state.gameState.sideCardList} />
                    </div>

                    <div className="columns small-8 medium-8 large-8" >
                        <CamelsBox camelList={this.state.gameState.camelList} />
                    </div>

                    <div className="columns small-2 medium-2 large-2">
                        <DeckBox deck={this.state.gameState.deck}/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Race;
