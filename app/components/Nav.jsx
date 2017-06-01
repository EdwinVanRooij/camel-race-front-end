var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Nav</h2>
                <Link to="/">Lobby</Link>
                <Link to="rules">Rules</Link>
                <Link to="author">Author</Link>
            </div>
        );
    }
});

module.exports = Nav;