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
                    switch (error.status) {
                        case (401):
                            {
                                mscAlert({
                                    title: 'Bad Credentials!',
                                    subtitle: 'Contact with developer to get a valid token',
                                    okText: 'OK',
                                    dismissOverlay: false,
                                    onOk: function() {

                                    }
                                });
                                break;
                            }

                        case (403):
                            {
                                mscAlert({
                                    title: 'API Request Limit Exceeded!',
                                    subtitle: 'Contact with developer to get a new valid token',
                                    okText: 'OK',
                                    dismissOverlay: false,
                                    onOk: function() {

                                    }
                                });
                                break;
                            }
                        default:
                            {
                                console.log(error.status);
                                mscAlert({
                                    title: 'Error',
                                    subtitle: 'Contact with developer to get support',
                                    okText: 'OK',
                                    dismissOverlay: false,
                                    onOk: function() {

                                    }
                                });
                            }
                    }
                });
            }
        }
    });