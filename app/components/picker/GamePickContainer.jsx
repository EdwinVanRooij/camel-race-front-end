import React from 'react';
import PageHeader from 'app/components/PageHeader';
import GamePickItem from 'GamePickItem';

import CamelPicture from 'CamelPicture';
import MexicanPicture from 'MexicanPicture';

class GamePickContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleCamelRace = this.handleCamelRace.bind(this);
        this.handleMexican = this.handleMexican.bind(this);
        this.handleMore = this.handleMore.bind(this);
    }

    handleCamelRace() {
        alert('Clicked camel race)');
    }
    handleMexican() {
        alert('Clicked mexican race)');
    }
    handleMore() {
        alert('Clicked more race)');
    }

    render() {
        return (
            <div>
                <div>
                    <PageHeader title={'Pick a Game!'}/>
                </div>
                <div className="game-pick-container container">
                    <ul>
                        <li>
                            <GamePickItem onClick={(id) => this.handleCamelRace(id)} imageUrl={CamelPicture} title={"CamelRace"}
                                          subtitle={"Place your bets..."}/>
                        </li>
                        <li>
                            <GamePickItem onClick={(id) => this.handleMexican(id)} imageUrl={MexicanPicture} title={"Mexican"}
                                          subtitle={"Get your tequila here..."}/>
                        </li>
                        <li>
                            <GamePickItem onClick={(id) => this.handleMore(id)} imageUrl={"http://via.placeholder.com/400x300"} title={"-"}
                                          subtitle={"More to come..."}/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = GamePickContainer;

