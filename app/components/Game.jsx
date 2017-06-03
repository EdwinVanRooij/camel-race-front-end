import React from 'react';

function CamelsBox(props) {
    return (
        <div>
            <h3>Camel 1</h3><h3>Camel 2</h3><h3>Camel 3</h3><h3>Camel 4</h3>
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
