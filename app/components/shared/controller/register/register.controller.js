'use strict';

angular.module('mediavodapp.shared')
.controller('RegisterController',['$scope', 'AuthHttpService', function($scope, AuthHttpService){

    $scope.register = {
        username : '',
        password : ''
    }

    $scope.registerUser = function () {
        AuthHttpService.register($scope.register.username, $scope.register.password).then(function(data){
            console.log("Register success");
            $location.path('/home');
        }).catch(function(data){
            console.log("Register failed");
        }).finally(function(){
        });
    }

}]);