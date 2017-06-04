import React from 'react';

function ConnectedBoxMessage(props) {
    return (

        <div className="box-header lobby-box-header text-center">
            <h3>Connected</h3>
        </div>
    )
}

function ConnectedBoxPlayers(props) {
    return (
        <div>
            <ul>
                <li>
                    Rik
                </li>
            </ul>
            <ul>
                <li>
                    Bob
                </li>
            </ul>
            <ul>
                <li>
                    Tom
                </li>
            </ul>
        </div>
    )
}

function LobbyConnectedBox(props) {
    return (
        <div>
            <ConnectedBoxMessage/>
            <ConnectedBoxPlayers/>
        </div>
    )
}

module.exports = LobbyConnectedBox;

