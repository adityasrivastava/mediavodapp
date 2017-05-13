var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    console.log(req,res);
});

router.post('/', function (req, res) {
    console.log(req,res);
});

module.exports = router;