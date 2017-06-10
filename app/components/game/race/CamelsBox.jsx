import React from 'react';
import AceOfClubs from "AceOfClubs";
import AceOfSpades from "AceOfSpades";
import AceOfHearts from "AceOfHearts";
import AceOfDiamonds from "AceOfDiamonds";

import CardUnknown from 'CardUnknown';
import CardEmpty from 'CardEmpty';

// This is a temp card, will replace deck later on
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

module.exports = CamelsBox;
