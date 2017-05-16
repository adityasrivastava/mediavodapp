var express = require('express');
var service = require('services/user.service.js');

var router = express.Router();

router.get('/', function (req, res) {
    if(req.params != undefined) {
        service.getVideoHistory(req.params).then(function(data){
            res.status(200);
            res.send("Video history");
        }).catch(function(error){
            res.status(500);
            res.send("Video history not found");
        });
    }
});

router.post('/', function (req, res) {
    if(req.body != undefined) {
        console.log(req.body);
        service.addVideoHistory(req.body).then(function(data){
            res.status(200);
            res.send("Video history added");
        }).catch(function(error){
            res.status(500);
            res.send("Video history not added");
        });
    }
});


module.exports = router;