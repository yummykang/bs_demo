var scotchApp = angular.module('scotchApp', ['ngRoute', 'ui.bootstrap']);

scotchApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'index.html'
    }).when('/orders', {
        templateUrl: 'business/orders/orders.html'
    });
}]);

scotchApp.controller('scotchController', function ($scope, $http, $modal) {
    $http.get("json/menu.json").success(function (data) {
        $scope.menus = data;
    });
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'business/orders/order_details.html'
        })
    };
});
