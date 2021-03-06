var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

const port = process.env.PORT || 8086;
app.listen(port, function() {
    console.log('Express server is up on port ' + port)
});
