var config = require('config.json');
var mongo = require('mongoskin');
var Q = require('q');

var db = mongo.db(config.connectionString,{ native_parser: true });


var service = {};

service.create = create;
service.login = login;
service.addVideoHistory = addVideoHistory;
service.getVideoHistory = getVideoHistory;


module.exports = service;

function addVideoHistory(videohistory) {
db.bind('videohistory');
     var deferred = Q.defer();

    db.videohistory.findOne({title: videohistory.title}, function(error, result){
        if(error) deferred.reject(error);

        if(result) {
            deferred.reject('Video already exists in history');
        }else{
            insertVideoHistory(videohistory);
        }
    });

    function insertVideoHistory(videohistory) {
        db.videohistory.insert(videohistory, function(error, result){
            if(error) deferred.reject(error);

            if(result) {
                deferred.resolve(result);
            }else{
                deferred.reject('Video history not insert.');
            }
        });
    }

    return deferred.promise;

}

function getVideoHistory(username) {
db.bind('videohistory');
     var deferred = Q.defer();

    db.videohistory.findOne({username: username}, function(error, result){
        if(error) deferred.reject(error);

        if(result) {
            deferred.resolve(result);
        }else{
            deferred.reject('Username video '+user.username+" does not exists.");
        }
    });

    return deferred.promise;

}

function login(user) {
    db.bind('users');
    var deferred = Q.defer();

    db.users.findOne({username: user.username}, function(error, result){
        if(error) deferred.reject(error);

        if(result) {
            deferred.resolve(result);
        }else{
            deferred.reject('Username '+user.username+" does not exists.");
        }
    });

    return deferred.promise;
}

function create(user) {
    db.bind('users');
    var deferred = Q.defer();

    db.users.findOne({username: user.username}, function(error, result){
        if(error) deferred.reject(error);

        if(result) {
            deferred.reject('Username '+user.username+" already exists. Try login in.");
        }else{
            createUser(user);
        }
    });

    function createUser() {
        db.users.insert(user, function(error, result){
            if(error) deferred.reject(error);

            deferred.resolve();
        });
    }

    return deferred.promise;
}

