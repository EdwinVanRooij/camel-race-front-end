import React from 'react';

import typeToUrl from 'Util';
import Camel from 'Camel';

function renderCamelRow(camel) {
    switch (camel.position) {
        case 0:
            return (
                <div className="row">
                    <Camel/>
                    <Camel/>
                    <Camel/>
                    <Camel/>
                    <Camel imageUrl={typeToUrl(camel.cardType)}/>
                </div>
            );
        case 1:
            return (
                <div className="row">
                    <Camel/>
                    <Camel/>
                    <Camel/>
                    <Camel imageUrl={typeToUrl(camel.cardType)}/>
                    <Camel/>
                </div>
            );
        case 2:
            return (
                <div className="row">
                    <Camel/>
                    <Camel/>
                    <Camel imageUrl={typeToUrl(camel.cardType)}/>
                    <Camel/>
                    <Camel/>
                </div>
            );
        case 3:
            return (
                <div className="row">
                    <Camel/>
                    <Camel imageUrl={typeToUrl(camel.cardType)}/>
                    <Camel/>
                    <Camel/>
                    <Camel/>
                </div>
            );
        case 4:
            return (
                <div className="row">
                    <Camel imageUrl={typeToUrl(camel.cardType)}/>
                    <Camel/>
                    <Camel/>
                    <Camel/>
                    <Camel/>
                </div>
            );
    }

}


function CamelsBox(props) {
    if (!props.camelList) {
        return (
            <div>
                <h1>Wait a moment...</h1>
            </div>
        )
    }

    return (
        <div className="row">
            <div className="columns vertical small-3 medium-3 large-3">
                {renderCamelRow(props.camelList[0])}
            </div>
            <div className="columns vertical small-3 medium-3 large-3">
                {renderCamelRow(props.camelList[1])}
            </div>
            <div className="columns small-3 medium-3 large-3">
                {renderCamelRow(props.camelList[2])}
            </div>
            <div className="columns small-3 medium-3 large-3">
                {renderCamelRow(props.camelList[3])}
            </div>
        </div>
    )
}

module.exports = CamelsBox;
