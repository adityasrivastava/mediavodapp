'use strict';

angular.module('mediavodapp.shared')
.controller('LoginController',['$scope','AuthHttpService','UserProfileService', '$location', '$rootScope',function($scope, AuthHttpService,UserProfileService, $location, $rootScope){

    $scope.login = {
        username : '',
        password : ''
    }
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
            $location.path("#!/home");          
        }).catch(function(data){
            console.log("Login failed");
        }).finally(function(){
            $scope.login.username = '';
            $scope.login.password = '';  
        });
    }


}]);