var express = require('express');
var router = express.Router();
var Post = require("./models/Post.js");
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function(req, res){
    //call in the Book collection | (where does books come from? how does Mongoose know to use books? is this the instantiation of books or does that happen later?)
    Book.find(function(err, books){
        var allBooks = {books: books}
        res.render('home', allBooks)
    })
})

router.get('/', function(req, res){
    Book.find(function(err, books){
        console.log(books);
        res.json(books)
    }); //mongoose version of db.books.find() in repl
})

// get /books/:id
router.get('/:id', function(req, res){
    var id = req.params.id;
    Book.findById(id, function(err, book){
        console.log(id);
        res.json(book);
    });
})
// post /books
router.post('/', function(req, res){
    console.log(req.body);
var book = new Book ({name: req.body.name,
               author: req.body.author,
               numberOfPages: req.body.numberOfPages,
               genre: req.body.genre,
               datePublished: req.body.datePublished})
    book.save();
    res.send('success');
})
// patch /books/:id
router.patch('/:id', function(req, res){
    var id = req.params.id;
    Book.findById(id, function(err, book){
        book.name = req.body.name;
        book.author = req.body.author;
        book.numberOfPages = req.body.numberOfPages;
        book.genre = req.body.genre;
        book.datePublished = req.body.datePublished;
        book.save();
        res.json(book);
    })
})

// delete /books/:id
router.delete('/:id', function(req, res){
    var id = req.params.id;
    Book.findById(id, function(err, book){
        book.remove();
        res.json("success")
    })
})

module.exports = router;
