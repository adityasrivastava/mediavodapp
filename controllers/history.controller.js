var express = require('express');
var service = require('services/user.service.js');

var router = express.Router();

router.put('/', function (req, res) {
    if(req.body != undefined) {
        service.getVideoHistory(req.body).then(function(data){
            res.status(200);
            res.send(data);
        }).catch(function(error){
            res.status(500);
            console.log(error);
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