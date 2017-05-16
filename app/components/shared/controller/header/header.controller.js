'use strict';

angular.module('mediavodapp.shared')
.controller('HeaderController',['$location', '$scope', '$rootScope','UserProfileService',function($location,$scope, $rootScope, UserProfileService){
    $scope.profile = false;

    $scope.userprofile = {};

    $scope.selectedRoute = function (path) {
       if($location.path().indexOf(path) > -1){
            return true;
       }

       return false;
    }

    $rootScope.$on('userprofile', function(args){
        $scope.userprofile = UserProfileService.getProfile();
        $scope.profile = true;
        console.log($scope.userprofile);
    });
}]);