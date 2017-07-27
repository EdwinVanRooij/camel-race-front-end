import React from 'react';

import typeToUrl from 'Util';
import Camel from 'Camel';

import VictorySound from 'VictorySound';
import Sound from 'react-sound';

function ResultsBox(props) {


    return (
        <div className="container">
            <Camel imageUrl={typeToUrl.typeToUrl(props.results.winningType)}/>
            <Sound
                url={VictorySound}
                playStatus={Sound.status.PLAYING}
                volume={80}
                playFromPosition={0}
            />
        </div>
    )
}

module.exports = ResultsBox;

