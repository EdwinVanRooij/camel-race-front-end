import React from 'react';
import AceOfClubs from "AceOfClubs";
import AceOfSpades from "AceOfSpades";
import AceOfHearts from "AceOfHearts";
import AceOfDiamonds from "AceOfDiamonds";
import CardUnknown from "CardUnknown";
import PageHeader from 'PageHeader';

function SideCard(props) {
    return (
        <div className="side-card">
            <img src={CardUnknown}/>
        </div>
    )
}

function Camel(props) {
    return (
        <div className="camel">
            <img style={{width: '800px'}} src={props.imageUrl}/>
        </div>
    )
}

function CamelsBox(props) {
    return (
        <div className="row">
            <div className="columns small-3 medium-3 large-3">
                <Camel imageUrl={AceOfClubs}/>
            </div>
            <div className="columns small-3 medium-3 large-3">
                <Camel imageUrl={AceOfSpades}/>
            </div>
            <div className="columns small-3 medium-3 large-3">
                <Camel imageUrl={AceOfDiamonds}/>
            </div>
            <div className="columns small-3 medium-3 large-3">
                <Camel imageUrl={AceOfHearts}/>
            </div>
        </div>
    )
}

function SideCardsBox(props) {
    return (
        <div>
            <ul>
                <SideCard/>
                <SideCard/>
                <SideCard/>
                <SideCard/>
            </ul>
        </div>
    )
}

function Deck(props) {
    return (
        <div className="deck">
            <h2>Card!</h2>
        </div>
    )
}

function LatestCard(props) {
    return (
        <div className="latest-card">
            <h2>Card!</h2>
        </div>
    )
}

function DeckBox(props) {
    return (
        <div>
            <LatestCard/>
            <Deck/>
        </div>
    )
}

class Game extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <PageHeader title={'Race!'}/>
                </div>
                <div className="row container">
                    <div className="columns small-2 medium-2 large-2">
                        <SideCardsBox />
                    </div>

                    <div className="columns small-8 medium-8 large-8">
                        <CamelsBox/>
                    </div>

                    <div className="columns small-2 medium-2 large-2">
                        <DeckBox/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Game;
