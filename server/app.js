var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path');
    Person = require('./models/Person.js'),
    Place = require('./models/Place.js'),
    Post = require('./models/Post.js');

    require('./db/db');

var PersonController = require('./controllers/PersonController');
var PlaceController = require('./controllers/PlaceController');
var PostController = require('./controllers/PostController');

app.use('/person', PersonController);
app.use('/place', PlaceController);
app.use('/post', PostController);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs')

server.listen(3000, function(){
    console.log("Server running on port 3000")
})
