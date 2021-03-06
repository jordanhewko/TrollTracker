var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../public/views');

app.use(express.static(__dirname + '/../public' ));

app.get('/', function(req, res){
  res.render((__dirname + '/../public/views/home.ejs'));
});

app.get('/results', function(req, res){
  res.render((__dirname + '/../public/views/results.ejs'));
});

module.exports = app;