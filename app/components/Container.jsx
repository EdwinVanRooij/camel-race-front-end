import React from 'react';
import Nav from 'Nav';

function Container(props) {
    return (
        <div>
            <Nav/>
            {props.children}
        </div>
    )
}

module.exports = Container;