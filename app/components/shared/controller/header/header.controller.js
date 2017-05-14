'use strict';

angular.module('mediavodapp.shared')
.controller('HeaderController',['$location',function($location){

    $scope.selectedRoute = function (path) {
       if($location.path().indexOf(path) > -1){
            return true;
       }

       return false;
    }

}]);