import React from 'react';
import PageHeader from 'app/components/PageHeader';
import LobbyConnectedBox from 'LobbyConnectedBox';
import LobbyStartBox from 'LobbyStartBox';
import LobbyReadyIndicator from 'LobbyReadyIndicator';

class GamePickItem extends React.Component {


    render() {
        return (
            <div>
                <h1 className="text-center">Author</h1>
                <p>Edwin van Rooij.</p>
            </div>
        )
    }
}

module.exports = GamePickItem;

