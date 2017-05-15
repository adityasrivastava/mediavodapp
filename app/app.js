'use strict';

// Declare app level module which depends on views, and components
angular.module('mediavodapp', [
  'ngRoute',
  'ui.bootstrap',
  'mediavodapp.shared',
  'mediavodapp.components',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $locationProvider.hashPrefix('!');

}]);