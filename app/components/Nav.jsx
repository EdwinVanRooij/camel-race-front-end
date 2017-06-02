var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Nav</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Lobby</IndexLink>
                <Link to="rules" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Rules</Link>
                <Link to="author" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Author</Link>
            </div>
        );
    }
});

module.exports = Nav;