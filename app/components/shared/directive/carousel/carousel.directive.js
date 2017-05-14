'use strict';

angular.module('mediavodapp').directive('carousel', [function(){

    return {
        restrict : 'E',
        templateUrl : 'components/shared/directive/carousel/template.html',
        scope : {
            data: '='
        },
        controller : function () {

        },
        link: function(scope, elm, attr, ctr) {
            console.log(scope.data);
            $(elm[0]).owlCarousel({
                loop : true,
                margin: 10,
                nav: true,
                responsive : {
                    0:{
                        items:10
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:2
                    }
                }
            });
        }
    };
}]);