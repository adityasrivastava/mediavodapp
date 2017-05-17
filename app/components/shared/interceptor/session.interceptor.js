'use strict';

angular.module('mediavodapp.shared')
    .factory("SessionInterceptor", ['$log', '$q', '$rootScope', '$location', function ($log, $q, $rootScope, $location) {

        return {

            request: function (request) {
                return request;
            },
            response: function (response) {
                return response;
            },

            requestError: function(error) {

                $log.log(error);

                return $q.reject(error);
            },

            responseError: function (error) {

                $log.log(error);

                if (error === 'Authorization Required') {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                    $rootScope.$broadcast(error);
                    $location.path("/login");

                } else if (error.status == 401) {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                    $rootScope.$broadcast('Authorization Required');
                    $location.path("/login");
                }

                return $q.reject(error);
            }
        };

    }]);