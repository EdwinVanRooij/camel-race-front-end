import React from 'react';
import PageHeader from 'PageHeader';

import SideCardsBox from 'SideCardsBox';
import DeckBox from 'DeckBox';
import CamelsBox from 'CamelsBox';

import HorseRace from 'HorseRace';
import Sound from 'react-sound';

// var start_delay = 12.5;
// var long_delay = 2;
// var normal_delay = 1.50;
// var short_delay = 0.75;

var start_delay = 3;
var normal_delay = 0.25;

class Race extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ws: props.ws,
            gameId: props.gameId,
            gameState: {},
        };

        this.state.ws.onmessage = (event) => {
            console.log('Message from race');
            const obj = JSON.parse(event.data);
            switch (obj.eventType) {
                case 'gameStartedWithState':
                    this.setState({
                        gameState: obj.value
                    });
                    setTimeout(() => this.pickCard(), start_delay * 1000);
                    break;

                case 'pickedCard':
                    var card = obj.value;

                    setTimeout(() =>this.handlePickedCard(card), normal_delay * 1000);

                    setTimeout(() =>this.sendMessageWithId('camelWon'), normal_delay * 500);
                    break;

                case 'camelDidWin':
                    var camel = obj.value;
                    setTimeout(() =>this.handleCamelWon(camel), normal_delay * 1000);

                    setTimeout(() =>this.sendMessageWithId('getAllResults'), normal_delay * 1000);
                    break;

                case 'camelDidNotWin':
                    setTimeout(() => this.sendMessageWithId('moveCardsByLatest'), normal_delay * 500);
                    break;

                case 'newCamelPositions':
                    var camels = obj.value;
                    setTimeout(() => this.handleNewCamelPositions(camels), normal_delay * 1000);

                    setTimeout(() => this.sendMessageWithId('shouldSideCardTurn'), normal_delay * 1000);
                    break;

                case 'shouldSideCardTurnNo':
                    setTimeout(() => this.pickCard(), normal_delay * 1000);
                    break;

                case 'shouldSideCardTurnYes':
                    var sideCardList = obj.value;
                    setTimeout(() => this.handleNewSideCardPositions(sideCardList), normal_delay * 1000);

                    setTimeout(() => this.sendMessageWithId('newCamelList'), normal_delay * 1000);
                    break;

                case 'newCamelList':
                    var camelList = obj.value;
                    setTimeout(() => this.handleNewCamelPositions(camelList), normal_delay * 1000);

                    setTimeout(() => this.pickCard(), normal_delay * 1000);
                    break;

                case 'allResults':
                    console.log('Message from gameOverAllResults: ' + obj.value);
                    this.props.onGameOver(obj.value);
                    break;
                default:
                    console.log('Could not determine eventType \'' + obj.eventType + '\'')
            }
        };
    }

    sendMessageWithId(eventType) {
        this.state.ws.send("{'eventType': '" + eventType + "', 'value': '" + this.state.gameId + "'}");
    }

    pickCard() {
        this.sendMessageWithId('pickCard');
    }

    handlePickedCard(card) {
        this.state.gameState.lastPickedCard = card;
        var newState = this.state.gameState;
        this.setState({
            gameState: newState
        });
        // this.handlePossibleWinner(roundResults);
    }

    handleCamelWon(camel) {
        console.log('Camel ' + camel.cardType + ' won the game!');
    }

    handleNewCamelPositions(camels) {
        this.state.gameState.camelList = camels;
        var newState = this.state.gameState;

        this.setState({
            gameState: newState
        });
    }

    handleNewSideCardPositions(sidecards) {
        this.state.gameState.sideCardList = sidecards;
        var newState = this.state.gameState;

        this.setState({
            gameState: newState
        });
    }

    render() {
        return (
            <div>
                <br/>
                <div className="row container">
                    <div className="columns small-2 medium-2 large-2">
                        <SideCardsBox sideCardList={this.state.gameState.sideCardList}/>
                    </div>

                    <div className="columns small-8 medium-8 large-8">
                        <CamelsBox camelList={this.state.gameState.camelList}/>
                    </div>

                    <div className="columns small-2 medium-2 large-2">
                        <DeckBox lastPickedCard={this.state.gameState.lastPickedCard}/>
                    </div>
                </div>
                <Sound
                    url={HorseRace}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={0}
                />
            </div>
        );
    }
}

module.exports = Race;
