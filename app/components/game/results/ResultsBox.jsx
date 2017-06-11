import React from 'react';

import typeToUrl from 'Util';
import Camel from 'Camel';

function ResultsBox(props) {

    return (
        <div className="container">
            <Camel imageUrl={typeToUrl(props.results.winningType)}/>
            <ul>
                {
                    props.results.resultItems.map(entry =>
                    <div key={entry.player.id} >
                    Player {entry.player.name} with bid {entry.bid.value} on {entry.bid.type}
                    </div>
                    )
                }
            </ul>
        </div>
    )
}

module.exports = ResultsBox;

