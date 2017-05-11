'use strict';

angular.module('mediavodapp.http', [])
    .value('httpconfig', {



    })
    .service("http", ['httpconfig','$http', '$q', '$httpParamSerializerJQLike', function (httpconfig, $http, $q, $httpParamSerializerJQLike) {

        var Request = function () {

            this.makeCall = function (options) {

                var url = options.endpoint;

                return new HTTP(url, options);
            };

            this.loadResource = function (options) {

                var url = options.endpoint;

                return new HTTP(url, options);
            };

            return this;
        };

        // Our XHR object. This one gets a new instance with every request.
        var HTTP = function (url, opts) {

            var deferred = $q.defer();

            $http({
                method: opts.method,
                url: url,
                params: (opts.params || {}),
                data: opts.data,
                headers: opts.headers,
                cache: (opts.cache || false),
                transformRequest: function (data) {
                    if (opts.headers && opts.headers['Content-Type'] == undefined) {
                        var formData = new FormData();
                        Object.keys(data).forEach(key => {
                            formData.append(key, data[key]);
                        });
                        return formData;
                    } else if (opts.headers && opts.headers['Content-Type'] == 'application/x-www-form-urlencoded') {
                        return $httpParamSerializerJQLike(data);
                    } else {
                        return JSON.stringify(data);
                    }
                }
            }).success(function (data, status, headers) {
                deferred.resolve(data, status, headers);
            }).error(deferred.reject);

            return deferred.promise;
        };


        return new Request();

    }]);
