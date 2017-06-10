import React from 'react';
import CardUnknown from 'CardUnknown';

function Deck(props) {
    return (
        <div className="deck">
            <img src={CardUnknown}/>
        </div>
    )
}

function LatestCard(props) {
    return (
        <div className="latest-card">
            <img src={CardUnknown}/>
        </div>
    )
}

function DeckBox(props) {
    return (
        <div className="row">
            <LatestCard/>
            <Deck/>
        </div>
    )
}

module.exports = DeckBox;
