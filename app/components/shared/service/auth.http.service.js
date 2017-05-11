'use strict';

angular.module('mediavodapp.http')
    .service("AuthHttpService", ['http','ENDPOINT_CONFIG', function (http, ENDPOINT_CONFIG) {
        return {
            login(user, password) {
                return http.makeCall({
                    method: 'POST',
                    endpoint: ENDPOINT_CONFIG.login,
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    data: { username: user, password: password }
                });
            },
            register(user, password , email) {
                return http.makeCall({
                    method: 'POST',
                    endpoint: ENDPOINT_CONFIG.register,
                    headers: { "Content-Type": "application/json" },
                    data: { username: user, password: password, name: user, email: email, socialProvider: "REGISTER_FORM" }
                });
            }
        };
    }]);