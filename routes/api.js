const express = require('express');

const router = express.Router();

const Ninja = require('../models/ninja');


//get a list of ninjas from databse

router.get("/ninjas", function(req, res) {
    Ninja.find().then(function(ninjas) {
            res.send(ninjas);
        })
        //res.send({ type: 'GET' });
});

//add a new ninja to database
router.post("/ninjas", function(req, res, next) {
    // var ninja = new Ninja(req.body);
    // ninja.save();
    Ninja.create(req.body).then(function(ninja) {
        res.send(ninja);
    });
});


//update a ninja in a database
router.put("/ninjas/:id", function(req, res) {
    Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
        Ninja.findOne({ _id: req.params.id }).then(function(ninja) {
            res.send(ninja);
        })

    });
    //res.send({ type: 'PUT' });
});

//delete ninja from daabase
router.delete("/ninjas/:id", function(req, res) {
    //console.log(req.params.id);
    Ninja.findByIdAndRemove({ _id: req.params.id }).then(function(ninja) {

    });
    res.send(ninja);
});

module.exports = router;