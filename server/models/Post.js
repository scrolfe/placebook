var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    name: String,
    articleBody: String,
    media: String,
    image: String
});

var postModel = mongoose.model('Post', PostSchema);

module.exports = postModel;
