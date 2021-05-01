angular
    .module('github-test-api')
    .factory('apiService', function($http) {
        return {
            get: function(path, token) {
                return $http({
                    method: 'GET',
                    url: path,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'token ' + token
                    }
                }).then(function(response) {
                    return response.data;
                }, function(error) {
                    console.log(error);
                });
            }
        }
    });