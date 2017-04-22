// App initialization
angular.module("dlipdhunter.github.io", []);

// Controller : Home
angular.module("dlipdhunter.github.io").controller("HomeCtrl", ["$scope", "$http", fnHomeCtrl]);


// fnHomeCtrl
function fnHomeCtrl($scope, $http){
    $scope.Repos = [];
    $http.get('Contents/repos.json')
    .then(function(res){
        $scope.Repos = res.data;
    });
}