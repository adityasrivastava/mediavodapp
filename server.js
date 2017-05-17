require('rootpath') ();

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Middlewares 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/app', require('./controllers/app.controller'));
app.use('/login', require('./controllers/login.controller'));
app.use('/register', require('./controllers/register.controller'));
app.use('/user/history', require('./controllers/history.controller'));


app.get('/', function (req, res) {
    return res.redirect('/app');
});

var server = app.listen(3000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});