var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    name: String,
    location: String,
    features: String,
    image: String
});

var personModel = mongoose.model('Person', PersonSchema);

module.exports = personModel;
