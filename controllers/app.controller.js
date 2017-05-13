var express = require('express');
var router = express.Router();

router.use('/', express.static('app'));
router.use('/bower_components', express.static('bower_components'));


module.exports = router;
