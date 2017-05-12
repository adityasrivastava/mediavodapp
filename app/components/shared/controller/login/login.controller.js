'use strict';

angular.module('mediavodapp.shared')
.controller('LoginController',['$scope','AuthHttpService','UserProfileService',function($scope, AuthHttpService,UserProfileService){

    $scope.login = {
        username : '',
        password : ''
    }

    $scope.loginUser = function () {
        AuthHttpService.login($scope.login.username, $scope.login.password).then(function(data){
            console.log("Login success");
            UserProfileService.setProfile(data);
        }).catch(function(data){
            console.log("Login failed");
        }).finally(function(){

        });
    }


}]);