angular
    .module('github-test-api')
    .controller('homeCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.title = "GitHub Commit History";
        $scope.author = "byroff-17";
        $scope.repo = "github-test-api";

        $scope.getCommitList = function() {
            $http({
                method: 'GET',
                url: "https://api.github.com/repos/" + $scope.author + "/" + $scope.repo + "/commits"
            }).then(function(response) {
                console.log(response.data);
                $scope.commits = response.data;
            }, function(error) {

            });
        };

        $scope.selectCommit = function(commit) {
            $scope.commit = commit;
            $http({
                method: 'GET',
                url: "https://api.github.com/repos/" + $scope.author + "/" + $scope.repo + "/commits/" + $scope.commit.sha
            }).then(function(response) {
                $("#modalDetails").modal("show");
                console.log(response.data);
                $scope.commitDetails = response.data;
            }, function(error) {

            });
        };


        $(document).ready(function() {
            $scope.getCommitList();
        });
    }]);