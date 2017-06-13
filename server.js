var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(8083, function() {
    console.log('Express server is up on port 8083')
});