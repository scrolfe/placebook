var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
    image: String
});

var placeModel = mongoose.model('Place', PlaceSchema);

module.exports = placeModel;
