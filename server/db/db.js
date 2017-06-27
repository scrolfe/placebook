//connects to mongo database
var mongoose = require('mongoose')
var connectionString = 'mongodb://localhost/places' // ?

mongoose.connect(connectionString);

//these three callbacks are not 'mission critical' but help us debug
mongoose.connection.on('connected', function(){
    console.log('Connected to ' + connectionString);
})

mongoose.connection.on('error', function(){
    console.log('Mongodb error ' + connectionString);
})

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected from ' + connectionString);
})
