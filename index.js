const express = require('express');

const routes = require('./routes/api');
//setup express app

const app = express();

app.use('/api', routes);


//listen to the posrt 4000
app.listen(4000, function() {
    console.log("listening for request");
});