import React from 'react';
import AceOfClubs from "AceOfClubs";
import AceOfSpades from "AceOfSpades";
import AceOfHearts from "AceOfHearts";
import AceOfDiamonds from "AceOfDiamonds";
import CardUnknown from "CardUnknown";
import CardEmpty from "CardEmpty";
import PageHeader from 'PageHeader';

function SideCard(props) {
    return (
        <div className="side-card">
            <img src={CardUnknown}/>
        </div>
    )
}

function Camel(props) {
    if (props.imageUrl) {
        return (
            <div className="camel">
                <img src={props.imageUrl}/>
            </div>
        )
    }
    else {
        return (
            <div className="camel">
                <img src={CardEmpty}/>
            </div>
        )
    }
}

function CamelsBox(props) {
    return (
        <div className="row">
            <div className="columns vertical small-3 medium-3 large-3">
                <div className="row">
                    <Camel/>
                    <Camel/>
                    <Camel/>
                    <Camel/>
                    <Camel imageUrl={AceOfClubs}/>
                </div>
            </div>
            <div className="columns vertical small-3 medium-3 large-3">
                <div className="row">
                    <Camel/>
                    <Camel/>
                    <Camel/>
                    <Camel/>
                    <Camel imageUrl={AceOfSpades}/>
                </div>
            </div>
            <div className="columns small-3 medium-3 large-3">
                <div className="row">
                    <Camel/>
                    <Camel/>
                    <Camel/>
                    <Camel/>
                    <Camel imageUrl={AceOfDiamonds}/>
                </div>
            </div>
            <div className="columns small-3 medium-3 large-3">
                <div className="row">
                    <Camel/>
                    <Camel/>
                    <Camel/>
                    <Camel/>
                    <Camel imageUrl={AceOfHearts}/>
                </div>
            </div>
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

function Deck(props) {
    return (
        <div className="deck">
            <SideCard/>
        </div>
    )
}

function LatestCard(props) {
    return (
        <div className="latest-card">
            <SideCard/>
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

class Game extends React.Component {

    componentDidMount() {

        debugger;
        this.props.ws.send('From game!')
    }

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
