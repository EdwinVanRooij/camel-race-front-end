import React from 'react';
import CardUnknown from 'CardUnknown';
import CardFlipSound from 'CardFlipSound';
import Sound from 'react-sound';

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
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className="row">
            <LatestCard lastPickedCard={props.lastPickedCard}/>
            <Deck/>
            <Sound
                url={CardFlipSound}
                playStatus={Sound.status.PLAYING}
                volume={80}
                playFromPosition={0}
            />
        </div>
    )
}

module.exports = DeckBox;
