// create the module and name it cocosApp
var app = angular.module('cocosApp', ['ngRoute']);
// Configure the Routes
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", { templateUrl: "views/home.html", controller: "PageCtrl" })
        // Pages
        .when("/dashboard", { templateUrl: "views/dashboard.html", controller: "PageCtrl" })
        // else 404
        .otherwise("/404", {
            templateUrl: "views/404.html"
            , controller: "PageCtrl"
        });
}]);
app.controller('PageCtrl', function ( /*$scope*/ ) {
    console.log("-------------------- LOG -------------------");
});
