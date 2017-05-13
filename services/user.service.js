var config = require('config.json');
var mongo = require('mongoskin');
var Q = require('q');

var db = mongo.db(config.connectionString,{ native_parser: true });
db.bind('users');

var service = {};

service.create = create;
service.login = login;

module.exports = service;

function login(user) {
    var deferred = Q.defer();

    db.users.findOne({username: user.username}, function(error, result){
        if(error) deferred.reject(error);

        if(result) {
            deferred.resolve();
        }else{
            deferred.reject('Username '+user.username+" does not exists.");
        }
    });

    return deferred.promise;
}

function create(user) {
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

