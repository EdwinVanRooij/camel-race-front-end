import React from 'react';

import CardEmpty from 'CardEmpty';

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

module.exports = Camel;
