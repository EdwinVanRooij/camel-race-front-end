import React from 'react';
import PageHeader from 'PageHeader';

import MexicanPlayerTable from 'MexicanPlayerTable';

class DiceGame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: props.ws,
            gameId: props.gameId,
        };

        // setTimeout(() => this.rollNumber('one', 2), 2 * 1000);
        // setTimeout(() => this.rollNumber('two', 6), 2 * 1000);

        // setTimeout(() => this.rollNumber('one', 3), 6 * 1000);
        // setTimeout(() => this.rollNumber('two', 1), 6 * 1000);

        this.state.ws.onmessage = (event) => {
            console.log('Message from dicegame');
            const obj = JSON.parse(event.data);
            switch (obj.eventType) {
                case 'gameStartedWithState':
                    this.setState({
                        gameState: obj.value
                    });
                    setTimeout(() => this.pickCard(), this.start_delay * 1000);
                    break;

                default:
                    console.log('Could not determine eventType \'' + obj.eventType + '\'')
            }
        }
    }

    renderTitle() {
        const gameModeOrdinal = this.props.gameState.gameModeOrdinal;
        let title;
        if (gameModeOrdinal === 1) {
            title = 'Hardcore!'
        } else if (gameModeOrdinal === 2) {
            title = 'Normal'
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
        dice.addClass(newClass);

        if (currentClass === newClass) {
            dice.addClass('show-same');
        }
    }

    rollNumber(dice, number) {
        console.log('Rolling dice ' + dice + ' to ' + number);
        if (number === 1) {
            this.rollDice(dice, 'front');
        }
        else if (number === 2) {
            console.log('Rolling to 2');
            this.rollDice(dice, 'top');
        }
        else if (number === 3) {
            console.log('Rolling to 3');
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
                    <div className="row">
                        <div className="columns small-4 medium-4 large-4 player-scores">
                            <div className="stake">
                                <h1>Stake: {this.props.gameState.stake}</h1>
                            </div>
                            <div>
                                <MexicanPlayerTable players={this.props.gameState.players}/>
                            </div>
                        </div>
                        <div className="columns small-8 medium-8 large-8">
                            <div className="row score">
                                <h2>Score: 300</h2>
                            </div>
                            <div className="row dices">
                                {this.renderDices()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = DiceGame;
