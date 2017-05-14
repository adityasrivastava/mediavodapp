'use strict';

// Declare app level module which depends on views, and components
angular.module('mediavodapp', [
  'ngRoute',
  'mediavodapp.shared',
  'mediavodapp.components',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});

}]);

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});