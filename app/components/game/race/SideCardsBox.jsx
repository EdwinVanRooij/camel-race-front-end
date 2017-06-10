import React from 'react';
import CardUnknown from 'CardUnknown';

function SideCard(props) {
    return (
        <div className="side-card">
            <img src={CardUnknown}/>
        </div>
    )
}

function SideCardsBox(props) {
    return (
        <div className="row">
            <SideCard/>
            <SideCard/>
            <SideCard/>
            <SideCard/>
        </div>
    )
}

module.exports = SideCardsBox;
