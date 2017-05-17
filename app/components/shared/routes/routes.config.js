'use strict';

angular.module('mediavodapp.shared')
.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/user/home', {
            templateUrl : 'components/main/home/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl : 'components/shared/controller/login/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl : 'components/shared/controller/register/register.html',
            controller : 'RegisterController'
        })
        .when('/user/history', {
            templateUrl : 'components/shared/controller/history/history.html',
            controller : 'MovieHistoryController'
        })
        .otherwise({redirectTo: '/login'});

}])