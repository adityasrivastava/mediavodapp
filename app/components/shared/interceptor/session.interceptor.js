'use strict';

angular.module('mediavodapp.shared')
    .factory("SessionInterceptor", ['$log', '$q', '$rootScope', '$location', function ($log, $q, $rootScope, $location) {

        return {

            request: function (request) {

                if (request.url.indexOf("api/") >= 0) { // Auth based request
                    if (localStorage.getItem('authToken')) {
                        request.headers['X-AuthToken'] = localStorage.getItem('authToken');
                    } else {
                        if (request.url.indexOf('auth') == -1 && request.url.indexOf('http') > -1) {
                            return $q.reject('Authorization Required');
                        }
                    }
                }
                else {

                }

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
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("refreshToken");
                    localStorage.removeItem("expiryDate");
                    $rootScope.authToken = undefined;
                    $rootScope.$broadcast(error);
                    $location.path("/login");

                } else if (error.status == 401) {
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("refreshToken");
                    localStorage.removeItem("expiryDate");
                    $rootScope.authToken = undefined;
                    $rootScope.$broadcast('Authorization Required');
                    $location.path("/login");

                }

                return $q.reject(error);
            }
        };

    }]);