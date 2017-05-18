angular.module('mediavodapp').directive('videoElement', ['$timeout',function($timeout){

    return {

        restrict : 'E',

        templateUrl : 'components/shared/directive/video/template.html',
        replace: true,
        scope : {
            videoContent : '=',
        },
        controller : function () {
            console.log("Call controller");
        },

        link : function (scope, elm, attr, ctr) {
            plyr.setup(elm,{
                keyboardShortcuts : { focused: true, global: true }
            });

            $timeout(function(){
                elm.find('.plyr__controls').focus();
            },10);
        }

    };

}])