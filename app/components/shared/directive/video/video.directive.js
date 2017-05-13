angular.module('mediavodapp').directive('videoElement', [function(){

    return {

        restrict : 'E',

        templateUrl : 'components/shared/directive/video/template.html',

        scope : {
            videoContent : '=',
        },
//
//        compile : function () {
//            console.log("Call compile");
//        },

        controller : function () {
            console.log("Call controller");
        },

        link : function (scope, elm, attr, ctr) {
            console.log("Call link");
            console.log(attr, elm);
            plyr.setup(elm,{});
            console.log(scope.videoContent);
        }

    };

}])