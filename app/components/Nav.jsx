var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div className="top-bar">

                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">CamelRace</li>
                        <li>
                            <IndexLink to="/" activeClassName="active"
                                       activeStyle={{fontWeight: 'bold'}}>Lobby</IndexLink>
                        </li>
                        <li>
                            <Link to="rules" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Rules</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            <Link to="author" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Author</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;