var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    email: String,
    password: String
});

var personModel = mongoose.model('Person', PersonSchema);

module.exports = personModel;
