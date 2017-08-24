import React from 'react';
import PageHeader from 'PageHeader';

import MexicanOne from 'MexicanOne';
import MexicanTwo from 'MexicanTwo';

import MexicanPlayerTable from 'MexicanPlayerTable';

class DiceGame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: props.ws,
            gameId: props.gameId,
            stake: props.stake,
            gameState: props.gameState,
            previousOne: 1,
            previousTwo: 1,
        };

        this.state.ws.onmessage = (event) => {
            console.log('Message from dicegame');
            const obj = JSON.parse(event.data);
            switch (obj.eventType) {
                case 'everyoneVoted':
                    this.setState({
                        gameState: obj.value
                    });
                    break;

                case 'newGameThrow':
                    setTimeout(() => this.rollNumber('one', obj.value.newThrow.firstScore), 0);
                    setTimeout(() => this.rollNumber('two', obj.value.newThrow.secondScore), 1000);

                    setTimeout(() => {
                        this.setState({
                            score: obj.value.newThrow.score,
                            gameState: obj.value.gameState
                        });

                        this.state.ws.send("{'eventType': 'throwEnded', 'value': '" + this.state.gameId + "'}");
                    }, 2000);
                    break;

                case 'allResults':
                    setTimeout(() => this.props.onGameOver(obj.value), 1000);
                    break;

                default:
                    console.log('Could not determine eventType \'' + obj.eventType + '\'')
            }
        }
    }

    renderTitle() {
        const gameModeOrdinal = this.props.gameState.gameModeOrdinal;
        let title;
        if (gameModeOrdinal === 0) {
            title = 'Normal'
        } else if (gameModeOrdinal === 1) {
            title = 'Hardcore!'
        } else {
            title = 'Error! Time to panic!';
            console.log('Could not link game mode ordinal ' + gameModeOrdinal + ' to a valid game mode.')
        }

        return (
            <div>
                <PageHeader title={title}/>
            </div>
        );
    }

    rollDice(diceNumber, side) {
        var dice = $('#dice-' + diceNumber);

        var currentClass = dice.attr('class');
        var newClass = 'show-' + side;

        dice.removeClass();

        if (currentClass === newClass) {
            // dice.addClass('show-same');
        } else {
        }

        dice.addClass(newClass);
    }

    rollNumber(dice, number) {
        console.log('Rolling dice ' + dice + ' to ' + number);
        if (number === 1) {
            this.rollDice(dice, 'front');
        }
        else if (number === 2) {
            this.rollDice(dice, 'top');
        }
        else if (number === 3) {
            this.rollDice(dice, 'left');
        }
        else if (number === 4) {
            this.rollDice(dice, 'right');
        }
        else if (number === 5) {
            this.rollDice(dice, 'bottom');
        }
        else if (number === 6) {
            this.rollDice(dice, 'back');
        }
    }

    renderDices() {
        return (
            <div>
                
                <section className="dice-container columns small-6 medium-6 large-6">
                    <div id="dice-one" className="show-front">
                        <figure className="front"/>
                        <figure className="back"/>
                        <figure className="right"/>
                        <figure className="left"/>
                        <figure className="top"/>
                        <figure className="bottom"/>
                    </div>
                </section>
                <section className="dice-container columns small-6 medium-6 large-6">
                    <div id="dice-two" className="show-front">
                        <figure className="front"/>
                        <figure className="back"/>
                        <figure className="right"/>
                        <figure className="left"/>
                        <figure className="top"/>
                        <figure className="bottom"/>
                    </div>
                </section>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderTitle()}
                <div className="container">
                    <div className="row mexican-row">
                        <div className="columns small-2 medium-2 large-2">
                            <img src={MexicanOne}/>
                        </div>
                        <div className="columns small-2 medium-2 large-2 player-scores">
                            <div className="stake">
                                <h1>🍺 {this.state.gameState.stake}</h1>
                            </div>
                            <div>
                                <MexicanPlayerTable players={this.state.gameState.players}/>
                            </div>
                        </div>
                        <div className="columns small-6 medium-6 large-6">
                            <div className="row score">
                                <h2>{this.state.score}</h2>
                            </div>
                            <div className="row dices">
                                {this.renderDices()}
                            </div>
                        </div>
                        <div className="columns small-2 medium-2 large-2">
                            <img src={MexicanTwo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = DiceGame;
