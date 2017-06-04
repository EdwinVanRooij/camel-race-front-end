import React from 'react';
import AceOfClubs from "AceOfClubs";
import AceOfSpades from "AceOfSpades";
import AceOfHearts from "AceOfHearts";
import AceOfDiamonds from "AceOfDiamonds";

function SideCard(props) {

}

function Camel(props) {
    return (
        <div>
            <img style={{width: '200px'}} src={props.imageUrl}/>
        </div>
    )
}

function CamelsBox(props) {
    return (
        <div>
            <Camel imageUrl={AceOfClubs}/>
            <Camel imageUrl={AceOfSpades}/>
            <Camel imageUrl={AceOfHearts}/>
            <Camel imageUrl={AceOfDiamonds}/>
        </div>
    )
}

function SideCardsBox(props) {
    return (
        <div>
            <ul>
                <li>Card 1</li>
                <li>Card 2</li>
                <li>Card 3</li>
                <li>Card 4</li>
            </ul>
        </div>
    )
}

function DeckBox(props) {
    return (
        <div>
            <h2>Card!</h2>
            <h1>?</h1>
        </div>
    )
}

class Game extends React.Component {

    render() {
        return (
            <div className="row container">
                <div className="columns small-3 medium-3 large-3">
                    <SideCardsBox/>
                </div>

                <div className="columns small-5 medium-5 large-5">
                    <CamelsBox/>
                </div>

                <div className="columns small-4 medium-4 large-4">
                    <DeckBox/>
                </div>
            </div>
        );
    }
}

module.exports = Game;
