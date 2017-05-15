'use strict';

angular.module('mediavodapp').directive('carousel', [function(){

    return {
        restrict : 'EA',
        // transclude : true,
        templateUrl : 'components/shared/directive/carousel/template.html',
        scope : {
            data: '='
        },
        controller : function () {

        },
        link: function(scope, elm, attr, ctr) {
            console.log(scope.data);
            $(elm).owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            });
        }
    };
}]);