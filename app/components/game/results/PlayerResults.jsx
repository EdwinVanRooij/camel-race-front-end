import React from 'react';

class PlayerResults extends React.Component {

    renderPlayer(entry) {
        if (entry.bid.type === this.props.results.winningType) {
            return (
                <div className="winning-player">
                    <h3 key={entry.player.id}>
                        {entry.player.name}: {entry.bid.value} - {entry.bid.type}
                    </h3>
                </div>
            )
        } else {
            return (
            <div className="losing-player">
                <h4 key={entry.player.id}>
                    {entry.player.name}: {entry.bid.value} - {entry.bid.type}
                </h4>
            </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <ul>
                    {
                        this.props.results.resultItems.map(entry =>
                            this.renderPlayer(entry)
                        )
                    }
                </ul>
            </div>
        )
    }
}

module.exports = PlayerResults;
