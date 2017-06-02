var React = require('react');
var LobbyConnectedBox = require('LobbyConnectedBox');
var LobbyStartBox = require('LobbyStartBox');
var PageHeader = require('PageHeader');

var Lobby = React.createClass({
    render: function () {

        return (
            <div className="row">
                <div>
                    <PageHeader title={'Lobby!'}/>
                </div>
                <div className="columns small-4 medium-4 large-4" style={{backgroundColor: '#eee'}}>
                    <LobbyConnectedBox/>
                </div>
                <div className="columns small-8 medium-8 large-8" style={{backgroundColor: '#eee'}}>
                    <LobbyStartBox/>
                </div>
            </div>
        );
    }
});

module.exports = Lobby;
