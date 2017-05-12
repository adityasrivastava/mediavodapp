'use strict';

angular.module('mediavodapp.components')
.controller('HomeController',['$scope','moviesFactory',function($scope, moviesFactory){

    $scope.movies = {};

    $scope.selectedVideo = {};

    $scope.selectVideo = function (videoSelected) {
        console.log(videoSelected);
        $scope.selectedVideo = videoSelected;
    }

    function init() {

        $scope.movies = moviesFactory.getMoviesList().then(function(success){
            console.log(success);
            $scope.movies = success;
        }).catch(function(error){
            console.log("An error occurred: ", error);
        }).finally(function(){

        });

    }

    init();

}]);