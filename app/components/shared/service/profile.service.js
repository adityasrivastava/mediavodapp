'use strict';

angular.module('mediavodapp').service('UserProfileService',[function(){

    var profile = {};

    return {
        setProfile(data) {
            profile = data;
        },
        getProfile(data) {
            return profile;
        }
    }

}]);