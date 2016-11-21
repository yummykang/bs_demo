var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl : 'index.html'
    }).
    when('/orders', {
        templateUrl : 'business/orders/orders.html'
    });
}]);

scotchApp.controller('scotchController', function ($scope, $http) {
    $http.get("json/menu.json").success(function (data) {
        $scope.menus = data;
    });
});
