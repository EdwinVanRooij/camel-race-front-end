import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Container from 'Container';
// Load css
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Container/>,
    document.getElementById('app')
);
