import React from 'react';
import CardUnknown from 'CardUnknown';

import cardToUrl from 'Util';

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
            <img src={cardToUrl.cardToUrl(props.lastPickedCard.cardType, props.lastPickedCard.cardValue)}/>
        </div>
    )
}

function DeckBox(props) {
    if (!props.lastPickedCard) {
        return (
            <div>
                <h1>Wait a moment...</h1>
            </div>
        )
    }

    return (
        <div className="row">
            <LatestCard lastPickedCard={props.lastPickedCard}/>
            <Deck/>
        </div>
    )
}

module.exports = DeckBox;
