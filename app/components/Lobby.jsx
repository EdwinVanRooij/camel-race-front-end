import React from 'react';
import LobbyConnectedBox from 'LobbyConnectedBox';
import LobbyStartBox from 'LobbyStartBox';
import PageHeader from 'PageHeader';

class Lobby extends React.Component {

    state = {gameId: 'Default ID value'};

    handleClick(e) {
        e.preventDefault();
        alert('Handling click in lobby!')
    }

    render() {
        return (
            <div>
                <div>
                    <PageHeader title={'Lobby!'}/>
                </div>
                <div className="row container">
                    <div className="columns small-4 medium-4 large-4 connected-box">
                        <LobbyConnectedBox/>
                    </div>
                    <div className="columns small-8 medium-8 large-8 start-box">
                        <LobbyStartBox gameId={this.state.gameId} onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Lobby;
