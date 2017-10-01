const express = require('express');

const router = express.Router();


//get a list of ninjas from databse

router.get("/ninjas", function(req, res) {
    res.send({ type: 'GET' });
});

//add a new ninja to database
router.post("/ninjas", function(req, res) {
    res.send({ type: 'POST' });
});


//update a ninja in a database
router.put("/ninjas/:id", function(req, res) {
    res.send({ type: 'PUT' });
});

//delete ninja from daabase
router.delete("/ninjas/:id", function(req, res) {
    res.send({ type: 'DELETE' });
});

module.exports = router;