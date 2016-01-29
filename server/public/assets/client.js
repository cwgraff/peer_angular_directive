var app = angular.module('myApp', []);

console.log('client hit');

app.controller('MainController', ['$scope', function($scope){
    $scope.data;
    $scope.test = "Hello World";
    $scope.moreData;
}]);