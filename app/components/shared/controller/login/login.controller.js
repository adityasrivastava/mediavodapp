'use strict';

angular.module('mediavodapp.shared')
.controller('LoginController',['$scope','AuthHttpService','UserProfileService', '$location', '$rootScope',function($scope, AuthHttpService,UserProfileService, $location, $rootScope){

    $scope.login = {
        username : '',
        password : ''
    }

    $scope.loginfailed = false;

    $scope.registerUser = function () {
        $location.path("/register");
    }

    $scope.loginUser = function () {
        AuthHttpService.login($scope.login.username, $scope.login.password).then(function(data){
            console.log("Login success");
            UserProfileService.setProfile(data);
             $rootScope.$broadcast('userprofile', {value: true}); 
            localStorage.setItem('username', $scope.login.username);
            localStorage.setItem('password', $scope.login.password); 
            $scope.loginfailed = false;
            $location.path("/home");          
        }).catch(function(data){
            console.log("Login failed");
            $scope.loginfailed = true;
        }).finally(function(){
            $scope.login.username = '';
            $scope.login.password = '';  
        });
    }


}]);