import React from 'react';
import {Link, IndexLink} from 'react-router';

function Nav(props) {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">Camelco</li>
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="author" activeClassName="active">Author</Link></li>
                </ul>
            </div>
        </div>
    )
}

module.exports = Nav;
