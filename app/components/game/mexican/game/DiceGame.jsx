import React from 'react';
import PageHeader from 'PageHeader';

import SideCardsBox from 'app/components/game/camelrace/race/SideCardsBox';
import DeckBox from 'app/components/game/camelrace/race/DeckBox';
import CamelsBox from 'app/components/game/camelrace/race/CamelsBox';


class DiceGame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: props.ws,
            gameId: props.gameId,
        };

        setTimeout(() => this.rollNumber('one', 2), 2 * 1000);
        setTimeout(() => this.rollNumber('two', 6), 2 * 1000);

        setTimeout(() => this.rollNumber('one', 3), 6 * 1000);
        setTimeout(() => this.rollNumber('two', 1), 6 * 1000);

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
        let suffix = '';
        if (this.props.mode === 'Hardcore') {
            suffix = '!';
        }

        return (
            <div>
                <PageHeader title={this.props.mode + suffix}/>
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
                                <h1>Stake: 2</h1>
                            </div>
                            <div>
                                <table className="unstriped">
                                    <thead>
                                    <tr>
                                        <th width="300">Player</th>
                                        <th width="150">Score</th>
                                        <th width="150">Throws left</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Edwin</td>
                                        <td>63</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Tom</td>
                                        <td>52</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Fons</td>
                                        <td>43</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Bob</td>
                                        <td>...</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Rik</td>
                                        <td>...</td>
                                        <td>3</td>
                                    </tr>
                                    </tbody>
                                </table>
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
