import React from 'react';
import PageHeader from 'app/components/PageHeader';
import GamePickItem from 'GamePickItem';

class GamePickContainer extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <PageHeader title={'Pick a Game!'}/>
                </div>
                <ul>
                    <li>
                        <GamePickItem/>
                    </li>
                </ul>
            </div>
        )
    }
}

module.exports = GamePickContainer;

