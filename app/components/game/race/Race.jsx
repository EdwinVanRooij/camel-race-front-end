import React from 'react';
import PageHeader from 'PageHeader';

import SideCardsBox from 'SideCardsBox';
import DeckBox from 'DeckBox';
import CamelsBox from 'CamelsBox';

// var long_delay = 3;
// var normal_delay = 2;
// var short_delay = 1;
var long_delay = 1;
var normal_delay = 2.5;
var short_delay = 0.5;

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
                    setTimeout(() => this.pickCard(), normal_delay * 1000);
                    break;

                case 'pickedCard':
                    var card = obj.value;

                    setTimeout(() => this.handlePickedCard(card), normal_delay * 1000);

                    this.sendMessageWithId('camelWon');
                    break;

                case 'camelDidWin':
                    var camel = obj.value;
                    setTimeout(() => this.handleCamelWon(camel), normal_delay * 1000);

                    this.sendMessageWithId('getAllResults');
                    break;

                case 'camelDidNotWin':
                    this.sendMessageWithId('moveCardsByLatest');
                    break;

                case 'newCamelPositions':
                    var camels = obj.value;
                    setTimeout(() => this.handleNewCamelPositions(camels), normal_delay * 1000);

                    this.sendMessageWithId('shouldSideCardTurn');
                    break;

                case 'shouldSideCardTurnNo':
                    setTimeout(() => this.pickCard(), normal_delay * 1000);
                    break;

                case 'shouldSideCardTurnYes':
                    var sideCardList = obj.value;
                    setTimeout(() => this.handleNewSideCardPositions(sideCardList), normal_delay * 1000);

                    this.sendMessageWithId('newCamelList');
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

    moveCamel(roundResults) {
        this.state.gameState.camelList = roundResults.newForwardCamelPositions;
        var newState = this.state.gameState;

        this.setState({
            gameState: newState
        });

        this.handlePossibleSideCardTurn(roundResults);
    }

    handlePossibleSideCardTurn(roundResults) {
        if (roundResults.shouldTurnSideCard === true) {
            setTimeout(() => this.turnSideCard(roundResults), normal_delay * 1000);
        } else if (roundResults.shouldTurnSideCard === false) {
            // Start a new round, we're done with this one.
            this.state.ws.send("{'eventType': 'newRound', 'value': '" + this.state.gameId + "'}");
        } else {
            console.log('Could not determine \'shouldTurnSideCard\' value, it\'s ' + roundResults.shouldTurnSideCard);
        }
    }

    turnSideCard(roundResults) {
        this.state.gameState.sideCardList = roundResults.newSideCardStatuses;
        var newState = this.state.gameState;

        this.setState({
            gameState: newState
        });

        setTimeout(() => this.moveCamelBack(roundResults.newFinalCamelPositions), normal_delay * 1000);
        //
    }

    moveCamelBack(camelList) {
        this.state.gameState.camelList = camelList;
        var newState = this.state.gameState;

        this.setState({
            gameState: newState
        });

        this.state.ws.send("{'eventType': 'newRound', 'value': '" + this.state.gameId + "'}");
    }

    render() {
        return (
            <div>
                <div>
                    <PageHeader title={'Race!'}/>
                </div>
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
            </div>
        );
    }
}

module.exports = Race;
