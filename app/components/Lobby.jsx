var React = require('react');
var LobbyConnectedBox = require('LobbyConnectedBox');
var LobbyStartBox = require('LobbyStartBox');
var PageHeader = require('PageHeader');

var Lobby = React.createClass({
    render: function () {

        return (
            <div>
                <div>
                    <PageHeader title={'Lobby!'}/>
                </div>
                <div className="row" style={{backgroundColor: '#eee'}}>
                    <div>
                        <div className="columns small-4 medium-4 large-4">
                            <LobbyConnectedBox/>
                        </div>
                        <div className="columns small-8 medium-8 large-8">
                            <LobbyStartBox/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Lobby;
