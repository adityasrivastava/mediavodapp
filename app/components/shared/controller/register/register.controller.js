'use strict';

angular.module('mediavodapp.shared')
.controller('RegisterController',['$scope', 'AuthHttpService','UserProfileService', function($scope, AuthHttpService, UserProfileService){

    $scope.register = {
        username : '',
        password : ''
    }

    $scope.registerUser = function () {
        AuthHttpService.register($scope.register.username, $scope.register.password).then(function(data){
            console.log("Register success");
            UserProfileService.setProfile(data);
            $location.path('/home');
        }).catch(function(data){
            console.log("Register failed");
        }).finally(function(){
            $scope.register.username = '';
            $scope.register.password = '';            
        });
    }

}]);