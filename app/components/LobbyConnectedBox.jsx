var React = require('react');

var ConnectedBoxMessage = React.createClass({
    render: function () {
        return (
            <div className="box-header" style={{paddingBottom: '2.5rem', paddingTop: '0.5rem'}} >
                <h3>Connected</h3>
            </div>
        );
    }
});

var ConnectedBoxPlayers = React.createClass({
    render: function () {
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
