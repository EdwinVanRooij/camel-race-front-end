import React from 'react';

class RestartBox extends React.Component {

    render() {

        return (
            <div>
                <button className="large primary expanded button" onClick={this.props.onRestartClick}>Play again!</button>
            </div>
        )
    }
}

module.exports = RestartBox;

