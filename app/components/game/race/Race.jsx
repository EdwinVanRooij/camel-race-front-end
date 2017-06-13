import React from 'react';
import PageHeader from 'PageHeader';

import SideCardsBox from 'SideCardsBox';
import DeckBox from 'DeckBox';
import CamelsBox from 'CamelsBox';

// var long_delay = 3;
// var normal_delay = 2;
// var short_delay = 1;
var long_delay = 1;
var normal_delay = 1;
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
                    console.log('Message from gameStartedWithState');
                    this.setState({
                        gameState: obj.value
                    });
                    this.state.ws.send("{'eventType': 'newRound', 'value': '" + this.state.gameId + "'}");
                    break;
                case 'roundResults':
                    console.log('Message from newRound');

                    setTimeout(() => this.handleRoundResults(obj.value), long_delay * 1000);
                    break;
                case 'gameOverAllResults':
                    console.log('Message from gameOverAllResults: ' + obj.value);
                    this.props.onGameOver(obj.value);
                    break;
                default:
                    console.log('Could not determine eventType \'' + obj.eventType + '\'')
            }
        };
    }

    handleRoundResults(roundResults) {
        this.state.gameState.lastPickedCard = roundResults.lastPickedCard;
        var newState = this.state.gameState;
        this.setState({
            gameState: newState
        });

        this.handlePossibleWinner(roundResults);
    }

    handlePossibleWinner(roundResults) {
        if (roundResults.gameEnded === true) {
            setTimeout(() => this.handleWinner(roundResults.winner), normal_delay * 1000);
        } else if (roundResults.gameEnded === false) {
            setTimeout(() => this.moveCamel(roundResults), short_delay * 1000);
        } else {
            console.log('Could not determine \'gameEnded\' value, it\'s ' + roundResults.gameEnded);
        }
    }

    handleWinner(camel) {
        console.log('Camel ' + camel.cardType + ' won the game!');
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
