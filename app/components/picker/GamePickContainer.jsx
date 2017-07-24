import React from 'react';
import PageHeader from 'app/components/PageHeader';
import GamePickItem from 'GamePickItem';

import CamelPicture from 'CamelPicture';
import MexicanPicture from 'MexicanPicture';

class GamePickContainer extends React.Component {

    constructor(props) {
        super(props);
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
                            <GamePickItem onClick={() => this.props.onCamelRaceClick()} imageUrl={CamelPicture} title={"CamelRace"}
                                          subtitle={"Place your bets..."}/>
                        </li>
                        <li>
                            <GamePickItem onClick={() => this.props.onMexicanClick()} imageUrl={MexicanPicture} title={"Mexican"}
                                          subtitle={"Get your tequila here..."}/>
                        </li>
                        <li>
                            <GamePickItem onClick={() => this.props.onMoreClick()} imageUrl={"http://via.placeholder.com/400x300"} title={"-"}
                                          subtitle={"More to come..."}/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = GamePickContainer;

