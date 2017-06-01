var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Container = require('Container');
var Lobby = require('Lobby');
var Rules = require('Rules');
var Author = require('Author');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Container}>

            <Route path="rules" component={Rules}/>
            <Route path="author" component={Author}/>

            <IndexRoute component={Lobby}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
