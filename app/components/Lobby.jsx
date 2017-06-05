import React from 'react';
import LobbyConnectedBox from 'LobbyConnectedBox';
import LobbyStartBox from 'LobbyStartBox';
import PageHeader from 'PageHeader';

var ws = new WebSocket('ws://192.168.5.115:8082/host');

class Lobby extends React.Component {

    state = {gameId: 'Default ID value'};

    componentDidMount() {
        ws.onopen = () => {
            ws.send("Message to send");
        };

        ws.onmessage = (event) => {
            var obj = JSON.parse(event.data);

            this.setState({
                gameId: obj.id
            })
        };
    }

    render() {
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
                        <LobbyStartBox gameId={this.state.gameId}/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Lobby;


// sendMessage = message => {
//     socket.emit('client:sendMessage', message)
// };
