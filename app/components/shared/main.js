'use strict';

angular.module('mediavodapp.shared', [
    'mediavodapp.http'
])
.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider){
  $httpProvider.interceptors.push('SessionInterceptor');
}])
.run([function(){

}]);