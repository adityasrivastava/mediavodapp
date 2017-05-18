'use strict';

angular.module('mediavodapp.components')
.controller('MovieHistoryController',['$scope','$timeout','moviesFactory','$uibModal','UserProfileService',function($scope, $timeout, moviesFactory, $uibModal, UserProfileService){
    $scope.movies = {};

    $scope.splitVideos = [];

    $scope.selectedVideo = {};

    $scope.userprofile = {};

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

    function groupElements (data) {
        var result = [], MAX_SIZE = 3;
       
        // if(typeof(data) === 'object') {
        //     result.push([data]);
        //     return result;
        // }

        while (data.length > 0) {
            result.push(data.splice(0, MAX_SIZE));
        }

        return result;
    }


    function init() {
       $scope.userprofile =  UserProfileService.getProfile();
        $scope.movies = moviesFactory.getMoviesHistory($scope.userprofile.username).then(function(success){
           
            $scope.movies = success;
            $scope.splitVideos = groupElements($scope.movies);
            console.log($scope.splitVideos);
        }).catch(function(error){
            console.log("An error occurred: ", error);
        }).finally(function(){

        });

    }

    init();

}]);

angular.module('mediavodapp').controller('SelectVideoController',['$uibModalInstance','videoDetails',"$scope",function($uibModalInstance,videoDetails,$scope){

    var $playerCtrl = this;
    $playerCtrl.videoDetails = videoDetails;

    $scope.$on('modal.closing', function(){
        console.log("closed");
        $playerCtrl.videoDetails = undefined;
    });

    console.log("Called");

}])