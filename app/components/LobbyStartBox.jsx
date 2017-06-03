var React = require('react');

function LobbyStartBox(props) {
    return (
        <div>
            <h3 className="text-center lobby-box-header game-id">#3432</h3>
            <button onClick={props.onStartClick} className="large primary expanded button">Start</button>
        </div>
    );
}

module.exports = LobbyStartBox;
