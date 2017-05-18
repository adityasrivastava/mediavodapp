'use strict';

angular.module('mediavodapp.components')
.controller('MovieHistoryController',['$scope','$timeout','moviesFactory','$uibModal','UserProfileService',function($scope, $timeout, moviesFactory, $uibModal, UserProfileService){
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
                    controller : 'SelectVideoController2',
                    controllerAs: '$playerCtrl2',
                    resolve: {
                        videoDetails: function () {
                        return $scope.selectedVideo;
                    }
            }
        });
    }


    function init() {
       $scope.userprofile =  UserProfileService.getProfile();
        $scope.movies = moviesFactory.getMoviesHistory($scope.userprofile.username).then(function(success){
            console.log(success);
            $scope.movies = success;
        }).catch(function(error){
            console.log("An error occurred: ", error);
        }).finally(function(){

        });

    }

    init();

}]);

angular.module('mediavodapp.components').controller('SelectVideoController2',['$uibModalInstance','videoDetails',"$scope",function($uibModalInstance,videoDetails,$scope){

    var $playerCtrl2 = this;
    $playerCtrl2.videoDetails = videoDetails;

    $scope.$on('modal.closing', function(){
        console.log("closed");
        $playerCtrl2.videoDetails = undefined;
    });

    console.log("Called");

}])