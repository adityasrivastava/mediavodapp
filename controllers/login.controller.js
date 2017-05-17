var express = require('express');
var router = express.Router();
var service = require('services/user.service.js');

router.post('/', function (req, res) {
    if(req.body != undefined) {
        service.login(req.body).then(function(success){
            res.status(200);
            res.send(success);
        }).then(function(error){
            res.status(500);
            res.send("Login failed.");
        });
    }else{
        res.send("Login failed.");
    }
});

module.exports = router;