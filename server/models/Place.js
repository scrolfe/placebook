var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
    name: String,
    hasMap: String,
    description: String,
    image: String
});

var placeModel = mongoose.model('Place', PlaceSchema);

module.exports = placeModel;
