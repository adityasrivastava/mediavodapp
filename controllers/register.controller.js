var express = require('express');
var service = require('services/user.service.js');

var router = express.Router();

router.post('/', function (req, res) {
    if(req.body != undefined) {
        service.create(req.body).then(function(data){
            res.status(200);
            res.send("User registered");
        }).catch(function(error){
            res.status(500);
            res.send("User register failed");
        });
    }
});


module.exports = router;