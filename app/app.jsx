import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Container from 'Container';
import Author from 'Author';
import Game from 'Game';
import GamePickContainer from 'GamePickContainer';

// Load css
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Container}>
            <Route path="author" component={Author}/>

            <IndexRoute component={GamePickContainer}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
