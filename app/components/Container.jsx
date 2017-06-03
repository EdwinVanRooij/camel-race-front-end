var React = require('react');
var Nav = require('Nav');

function Container(props) {
    return (
        <div>
            <Nav/>
            {props.children}
        </div>
    )
}

module.exports = Container;