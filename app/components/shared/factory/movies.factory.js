'use strict';

angular.module('mediavodapp.shared').factory('moviesFactory', ['ENDPOINT_CONFIG','http', function(ENDPOINT_CONFIG,http){

  return {
        getMoviesList() {
            return http.makeCall({
                method: 'GET',
                endpoint: ENDPOINT_CONFIG.movies,
                headers: { "Content-Type": "application/json" },
            });
        }
    };

}]);