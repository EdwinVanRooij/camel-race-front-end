import React from 'react';
import GamePickContainer from 'GamePickContainer';
import Game from 'Game';

function HomeButton(props) {
    return (
        <div className="row">
            <div className="small-6 small-centered text-center columns">
                <button className="button hollow large secondary large-centered home-button" onClick={props.onClick}>Home</button>
            </div>
        </div>
    )
}

class Container extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentScreen: 'gamePicker',
        };

        this.handleCamelRace = this.handleCamelRace.bind(this);
        this.handleMexican = this.handleMexican.bind(this);
        this.handleMore = this.handleMore.bind(this);
        this.handleHomeClick = this.handleHomeClick.bind(this);
    }

    handleCamelRace() {
        this.setState({currentScreen: 'camelRace'});
    }

    handleMexican() {
        this.setState({currentScreen: 'mexican'});
    }

    handleMore() {
        this.setState({currentScreen: 'more'});
    }

    handleHomeClick() {
        this.setState({currentScreen: 'gamePicker'});
    }

    render() {
        switch (this.state.currentScreen) {
            case 'gamePicker': {
                return (
                    <div>
                        <GamePickContainer onCamelRaceClick={() => this.handleCamelRace()}
                                           onMexicanClick={() => this.handleMexican()}
                                           onMoreClick={() => this.handleMore()}/>
                    </div>
                );
            }
            case 'camelRace': {
                return (
                    <div>
                        <Game/>
                        <HomeButton onClick={() => this.handleHomeClick()}/>
                    </div>
                );
            }
            case 'mexican': {
                return (
                    <div>
                        <h1>Mexican!</h1>
                        <HomeButton onClick={() => this.handleHomeClick()}/>
                    </div>
                );
            }
            case 'more': {
                return (
                    <div>
                        <h1>More!</h1>
                        <HomeButton onClick={() => this.handleHomeClick()}/>
                    </div>
                );
            }
            default: {
                console.log('Could not find out which screen to be at, it\'s ' + this.state.currentScreen + ' rn');
                break;
            }
        }
    }
}

module.exports = Container;