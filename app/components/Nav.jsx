var React = require('react');
var {Link, IndexLink} = require('react-router');

class Nav extends React.Component {
    render() {

        return (
            <div className="top-bar">

                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">CamelRace</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" >Lobby</IndexLink>
                        </li>
                        <li>
                            <Link to="rules" activeClassName="active">Rules</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            Created by <Link to="author" activeClassName="active">Edwin van Rooij</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = Nav;