var React = require('react');
var LobbyConnectedBox = require('LobbyConnectedBox');
var LobbyStartBox = require('LobbyStartBox');

var Lobby = React.createClass({
    render: function () {

        return (
            <div>
                <h1>Lobby!</h1>
                <LobbyConnectedBox/>
                <LobbyStartBox/>
            </div>
        );
    }
});

module.exports = Lobby;
