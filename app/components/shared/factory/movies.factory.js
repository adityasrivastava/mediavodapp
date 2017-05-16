'use strict';

angular.module('mediavodapp.shared').factory('moviesFactory', ['ENDPOINT_CONFIG','http', function(ENDPOINT_CONFIG,http){

  return {
        getMoviesList() {
            return http.makeCall({
                method: 'GET',
                endpoint: ENDPOINT_CONFIG.movies,
                headers: { "Content-Type": "application/json" },
            });
        },
        getMoviesHistory(username) {
            return http.makeCall({
                method: 'GET',
                endpoint: ENDPOINT_CONFIG.movieshistory+"?username="+username,
                headers: { "Content-Type": "application/json" },
            }); 
        },
        addMoviesHistory(videosession, username) {
            
            videosession.username = username;

            return http.makeCall({
                method: 'POST',
                endpoint: ENDPOINT_CONFIG.movieshistory,
                headers: { "Content-Type": "application/json" },
                data: videosession
            }); 
        }
    };

}]);