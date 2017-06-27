var express = require('express');
var router = express.Router();
var Person = require("../models/Person.js");
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function(req, res){
    //call in the Person collection
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
    Person.findById(id, function(err, person){
        console.log(id);
        res.json(person);
    });
})
// post /persons
router.post('/', function(req, res){
    console.log(req.body);
var person = new Person ({email: req.body.email,
               password: req.body.password});
    person.save()
    res.send('success');
});
// patch /persons/:id
router.patch('/:id', function(req, res){
    var id = req.params.id;
    Person.findById(id, function(err, person){
        person.email = req.body.email;
        person.password = req.body.password;
        person.save();
        res.json(person);
    });
});

// delete /persons/:id
router.delete('/:id', function(req, res){
    var id = req.params.id;
    Person.findById(id, function(err, person){
        person.remove();
        res.json("success")
    });
});

module.exports = router;
