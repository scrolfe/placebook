var express = require('express');
var router = express.Router();
var Place = require("../models/Place.js");
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/view', function(req, res){
    //call in the Place collection
    Place.find(function(err, places){ //hbs-ifier
        var allPlaces = {allPlaces: places}
        console.log(this.name)
        res.render('home', allPlaces)
    })
})

router.get('/json', function(req, res){
    Place.find(function(err, places){
        console.log(places);
        res.json(places)
    }); //mongoose version of db.places.find() in repl
})

// get /places/:id
router.get('/:id', function(req, res){
    var id = req.params.id;
    Place.findById(id, function(err, place){
        console.log(id);
        res.json(place);
    });
})
// post /places
router.post('/', function(req, res){
    console.log(req.body);
var place = new Place ({name: req.body.name,
               location: req.body.location,
               description: req.body.description,
               image: req.body.image});
    place.save();
    res.send('success');
})
// patch /places/:id
router.patch('/:id', function(req, res){
    var id = req.params.id;
    Place.findById(id, function(err, place){
        place.name = req.body.name;
        place.location = req.body.location;
        place.description = req.body.description;
        place.image = req.body.image;
        place.save();
        res.json(place);
    })
})

// delete /places/:id
router.delete('/:id', function(req, res){
    var id = req.params.id;
    Place.findById(id, function(err, place){
        place.remove();
        res.json("success")
    })
})

module.exports = router;
