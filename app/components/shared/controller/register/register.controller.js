'use strict';

angular.module('mediavodapp.shared')
.controller('RegisterController',['$scope', 'AuthHttpService', function($scope, AuthHttpService){

    $scope.register = {
        username : '',
        password : ''
    }

    $scope.registerUser = function () {
        AuthHttpService.register($scope.login.username, $scope.login.password).then(function(data){
            console.log("Register success");
        }).catch(function(data){
            console.log("Register failed");
        }).finally(function(){
        });
    }

}]);