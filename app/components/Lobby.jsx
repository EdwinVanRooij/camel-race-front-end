var React = require('react');
var LobbyConnectedBox = require('LobbyConnectedBox');
var LobbyStartBox = require('LobbyStartBox');
var PageHeader = require('PageHeader');

class Lobby extends React.Component {

    handleStartClick(i) {
        console.log('Message from ' + i)
    }

    render () {
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
                        <LobbyStartBox onStartClick={() => this.handleStartClick(i)}/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Lobby;
