'use strict';

angular.module('mediavodapp.shared')
.controller('RegisterController',['$scope', 'AuthHttpService','UserProfileService','$location', function($scope, AuthHttpService, UserProfileService,$location){

    $scope.register = {
        username : '',
        password : ''
    }

    $scope.registerfailed = false;

    $scope.registerUser = function () {
        AuthHttpService.register($scope.register.username, $scope.register.password).then(function(data){
            console.log("Register success");
            UserProfileService.setProfile(data);
            $location.path('/home');
            $scope.registerfailed = false;
        }).catch(function(data){
            console.log("Register failed");
            $scope.registerfailed = true;
        }).finally(function(){
            $scope.register.username = '';
            $scope.register.password = '';            
        });
    }

}]);