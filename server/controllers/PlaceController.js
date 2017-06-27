var express = require('express');
var router = express.Router();
var Place = require("./models/Place.js");
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function(req, res){
    //call in the Place collection
    Place.find(function(err, places){
        var allPlaces = {places: places}
        res.render('home', allPlaces)
    })
})

router.get('/', function(req, res){
    Place.find(function(err, places){
        console.log(places);
        res.json(places)
    }); //mongoose version of db.places.find() in repl
})

// get /places/:id
router.get('/:id', function(req, res){
    var id = req.params.id;
    Place.findById(id, function(err, book){
        console.log(id);
        res.json(book);
    });
})
// post /places
router.post('/', function(req, res){
    console.log(req.body);
var book = new Place ({name: req.body.name,
               author: req.body.author,
               numberOfPages: req.body.numberOfPages,
               genre: req.body.genre,
               datePublished: req.body.datePublished})
    book.save();
    res.send('success');
})
// patch /places/:id
router.patch('/:id', function(req, res){
    var id = req.params.id;
    Place.findById(id, function(err, book){
        book.name = req.body.name;
        book.author = req.body.author;
        book.numberOfPages = req.body.numberOfPages;
        book.genre = req.body.genre;
        book.datePublished = req.body.datePublished;
        book.save();
        res.json(book);
    })
})

// delete /places/:id
router.delete('/:id', function(req, res){
    var id = req.params.id;
    Place.findById(id, function(err, book){
        book.remove();
        res.json("success")
    })
})

module.exports = router;
