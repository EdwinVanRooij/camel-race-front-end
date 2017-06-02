var React = require('react');

var ConnectedBoxMessage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Connected</h1>
            </div>
        );
    }
});

var ConnectedBoxPlayers = React.createClass({
    render: function () {
        return (
            <div>
                <p>Rik</p>
                <p>Bob</p>
                <p>Tom</p>
            </div>
        );
    }
});

var LobbyConnectedBox = React.createClass({
    render: function () {
        return (
            <div>
                <ConnectedBoxMessage/>
                <ConnectedBoxPlayers/>
            </div>
        );
    }
});

module.exports = LobbyConnectedBox;
