var React = require('react');

var LobbyStartBox = React.createClass({
    render: function () {
        return (
            <div>
                <h3 className="text-center box-header lobby-box-header" >#3432</h3>
                <button className="large primary expanded button">Start</button>
            </div>
        );
    }
});

module.exports = LobbyStartBox;
