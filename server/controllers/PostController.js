var express = require('express');
var router = express.Router();
var Post = require("../models/Post.js");
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function(req, res){
    //call in the Post collection | (where does posts come from? how does Mongoose know to use posts? is this the instantiation of posts or does that happen later?)
    Post.find(function(err, posts){
        var allPosts = {posts: posts}
        res.render('home', allPosts)
    })
})

router.get('/', function(req, res){
    Post.find(function(err, posts){
        console.log(posts);
        res.json(posts)
    }); //mongoose version of db.posts.find() in repl
})

// get /posts/:id
router.get('/:id', function(req, res){
    var id = req.params.id;
    Post.findById(id, function(err, post){
        console.log(id);
        res.json(post);
    });
})
// post /posts
router.post('/', function(req, res){
    console.log(req.body);
var post = new Post ({name: req.body.name,
               articleBody: req.body.articleBody,
               numberOfPages: req.body.numberOfPages,
               media: req.body.media,
               image: req.body.image});
    post.save();
    res.send('success');
})
// patch /posts/:id
router.patch('/:id', function(req, res){
    var id = req.params.id;
    Post.findById(id, function(err, post){
        post.name = req.body.name;
        post.articleBody = req.body.articleBody;
        post.numberOfPages = req.body.numberOfPages;
        post.media = req.body.media;
        post.image = req.body.image;
        post.save();
        res.json(post);
    })
})

// delete /posts/:id
router.delete('/:id', function(req, res){
    var id = req.params.id;
    Post.findById(id, function(err, post){
        post.remove();
        res.json("success")
    })
})

module.exports = router;
