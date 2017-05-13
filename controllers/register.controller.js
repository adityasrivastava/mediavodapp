var express = require('express');
var service = require('services/user.service.js');

var router = express.Router();

router.get('/', function (req, res) {
    console.log(req,res);
    service.create({username: "test", password: "test"});
});

router.post('/', function (req, res) {
    console.log(req,res);
});


module.exports = router;