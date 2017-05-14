var express = require('express');
var service = require('services/user.service.js');

var router = express.Router();

router.post('/', function (req, res) {
    console.log(req,res);
});


module.exports = router;