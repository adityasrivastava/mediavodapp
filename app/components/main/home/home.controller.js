'use strict';

angular.module('mediavodapp.components')
.controller('HomeController',['$scope','$timeout','moviesFactory','$uibModal',function($scope, $timeout, moviesFactory, $uibModal){
    $scope.movies = {};

    $scope.selectedVideo = {};

    $scope.selectVideo = function (videoSelected) {
        console.log(videoSelected);
        $scope.selectedVideo = videoSelected;
        $uibModal.open({
                    animation: true,
                    templateUrl: 'playerModal.html',
                    controller : 'SelectVideoController',
                    controllerAs: '$playerCtrl',
                    resolve: {
                        videoDetails: function () {
                        return $scope.selectedVideo;
                    }
            }
        });
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

angular.module('mediavodapp').controller('SelectVideoController',['$uibModalInstance','videoDetails',function($uibModalInstance,videoDetails){

    var $playerCtrl = this;
    $playerCtrl.videoDetails = videoDetails;

}])