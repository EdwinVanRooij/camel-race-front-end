var React = require('react');

var ConnectedBoxMessage = React.createClass({
    render: function () {
        return (
            <div className="card-divider" >
                <h3>Connected</h3>
            </div>
        );
    }
});

var ConnectedBoxPlayers = React.createClass({
    render: function () {
        return (
            <div className="card-section" >
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
        );
    }
});

var LobbyConnectedBox = React.createClass({
    render: function () {
        return (
            <div className="card">
                <ConnectedBoxMessage/>
                <ConnectedBoxPlayers/>
            </div>
        );
    }
});

module.exports = LobbyConnectedBox;
