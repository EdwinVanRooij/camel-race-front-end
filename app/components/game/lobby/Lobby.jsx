import React from 'react';
import PageHeader from 'PageHeader';
import LobbyConnectedBox from 'LobbyConnectedBox';
import LobbyStartBox from 'LobbyStartBox';

function Lobby(props) {
    return (
        <div>
            <div>
                <PageHeader title={'Lobby!'}/>
            </div>
            <div className="row container">
                <div className="columns small-4 medium-4 large-4 connected-box">
                    <LobbyConnectedBox players={props.players}/>
                </div>
                <div className="columns small-8 medium-8 large-8 start-box">
                    <LobbyStartBox onStartClick={props.onStartClick} gameId={props.gameId}/>
                </div>
            </div>
        </div>
    )
}

module.exports = Lobby;

