// bodyParser = require('body-parser'),
var express = require('express');
var router = express.Router();
var Person = require("./models/Person.js");
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function(req, res){
    //call in the Person collection | (where does persons come from? how does Mongoose know to use persons? is this the instantiation of persons or does that happen later?)
    Person.find(function(err, persons){
        var allPersons = {persons: persons}
        res.render('home', allPersons)
    })
})

router.get('/', function(req, res){
    Person.find(function(err, persons){
        console.log(persons);
        res.json(persons)
    }); //mongoose version of db.persons.find() in repl
})

// get /persons/:id
router.get('/:id', function(req, res){
    var id = req.params.id;
    Person.findById(id, function(err, book){
        console.log(id);
        res.json(book);
    });
})
// post /persons
router.post('/', function(req, res){
    console.log(req.body);
var book = new Person ({name: req.body.name,
               author: req.body.author,
               numberOfPages: req.body.numberOfPages,
               genre: req.body.genre,
               datePublished: req.body.datePublished})
    book.save();
    res.send('success');
})
// patch /persons/:id
router.patch('/:id', function(req, res){
    var id = req.params.id;
    Person.findById(id, function(err, book){
        book.name = req.body.name;
        book.author = req.body.author;
        book.numberOfPages = req.body.numberOfPages;
        book.genre = req.body.genre;
        book.datePublished = req.body.datePublished;
        book.save();
        res.json(book);
    })
})

// delete /persons/:id
router.delete('/:id', function(req, res){
    var id = req.params.id;
    Person.findById(id, function(err, book){
        book.remove();
        res.json("success")
    })
})

module.exports = router;
