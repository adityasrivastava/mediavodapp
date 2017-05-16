'use strict';

angular.module('mediavodapp.shared')
.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home', {
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
        .when('/history', {
            templateUrl : 'components/shared/controller/register/history.html',
            controller : 'MovieHistoryController'
        })
        .otherwise({redirectTo: '/home'});
        // .when('/profile', {
        //     templateUrl : 'components/shared/controller/profile/profile.html',
        //     controller : 'ProfileController'
        // });


}])