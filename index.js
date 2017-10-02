const express = require('express');
const bodyParse = require('body-parser');
const routes = require('./routes/api');

const mongoose = require('mongoose');

//setup express app

const app = express();

//connect to mongobd

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParse.json());

//initialise routes
app.use('/api', routes);

//handling middleware

app.use(function(err, req, res, next) {
    console.log(err);
    res.send({ error: err.message });
})


//listen to the posrt 4000
app.listen(4000, function() {
    console.log("listening for request");
});