'use strict';

angular.module('mediavodapp.components')
.controller('HomeController',['$scope','$timeout','moviesFactory','$uibModal','UserProfileService',function($scope, $timeout, moviesFactory, $uibModal, UserProfileService){
    $scope.movies = undefined;

    $scope.selectedVideo = {};

     $scope.userprofile = {};

     $scope.carouselproperties = {
         active : 0,
         interval : 2000,
         nopause : false,
         notransition: false
     }

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

        if( $scope.userprofile.username != undefined) {
            moviesFactory.addMoviesHistory($scope.selectedVideo, $scope.userprofile.username).then(function(success){
                console.log("Video history added");
            }).catch(function(){
                console.log("Video history not added");
            });
        }

    }


    function init() {
               $scope.userprofile =  UserProfileService.getProfile();
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

angular.module('mediavodapp.components').controller('SelectVideoController',['$uibModalInstance','videoDetails',"$scope",function($uibModalInstance,videoDetails,$scope){

    var $playerCtrl = this;
    $playerCtrl.videoDetails = videoDetails;

    $scope.$on('modal.closing', function(){
        console.log("closed");
        $playerCtrl.videoDetails = undefined;
    });

}])