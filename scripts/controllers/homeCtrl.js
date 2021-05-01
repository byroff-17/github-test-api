angular
    .module('github-test-api')
    .controller('homeCtrl', ['$scope', 'apiService', function($scope, apiService) {
        $scope.title = "GitHub Commit History";
        $scope.author = "byroff-17";
        $scope.repo = "github-test-api";
        $scope.myToken = myToken;

        $scope.getCommitList = function() {
            var path = "https://api.github.com/repos/" + $scope.author + "/" + $scope.repo + "/commits";
            apiService.get(path, $scope.myToken).then(function(result) {
                if (result) {
                    $scope.commits = result;
                }
            });
        };

        $scope.selectCommit = function(commit) {
            $scope.commit = commit;
            var path = "https://api.github.com/repos/" + $scope.author + "/" + $scope.repo + "/commits/" + $scope.commit.sha;
            apiService.get(path, $scope.myToken).then(function(result) {
                if (result) {
                    $("#modalDetails").modal("show");
                    $scope.commitDetails = result;
                }
            });
        };

        $scope.getAuthor = function() {
            var path = "https://api.github.com/users/" + $scope.author;
            apiService.get(path, $scope.myToken).then(function(result) {
                if (result) {
                    console.log(result);
                    $scope.authorData = result;
                }
            });
        };

        $(document).ready(function() {
            $scope.getCommitList();
            $scope.getAuthor();
        });
    }]);