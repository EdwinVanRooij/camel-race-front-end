var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

const ip = 8086;
app.listen(ip, function() {
    console.log('Express server is up on port ' + ip)
});
