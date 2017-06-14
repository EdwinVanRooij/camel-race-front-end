import React from 'react';
import CardUnknown from 'CardUnknown';

import cardToUrl from 'Util';

function SideCard(props) {
    if (props.sideCard.isVisible === true) {
        return (
            <div className="flip-container this.classList.toggle('hover')">
                <div className="side-card front">
                    <img src={CardUnknown}/>
                </div>
                <div className="side-card back">
                    <img src={cardToUrl.cardToUrl(props.sideCard.cardType, props.sideCard.cardValue)}/>
                </div>
            </div>
        )
    } else if (props.sideCard.isVisible === false) {
        return (
            <div className="side-card">
                <img src={CardUnknown}/>
            </div>
        )
    } else {
        alert('Error, isVisible is ' + props.sideCard.isVisible)
    }
}

function SideCardsBox(props) {
    if (!props.sideCardList) {
        return (
            <div>
                <h1>Wait a moment...</h1>
            </div>
        )
    }

    return (
        <div className="row">
            <SideCard sideCard={props.sideCardList[3]}/>
            <SideCard sideCard={props.sideCardList[2]}/>
            <SideCard sideCard={props.sideCardList[1]}/>
            <SideCard sideCard={props.sideCardList[0]}/>
        </div>
    )
}

module.exports = SideCardsBox;
