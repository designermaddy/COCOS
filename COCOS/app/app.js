// create the module and name it desktopApp
var app = angular.module('cocosApp', ['ngRoute', 'ui.bootstrap']);
// Configure the Routes
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", {
            templateUrl: "pages/dashboard.html"
            , controller: 'MainCtrl'
        })
        // Pages
        /*.when("/Talentexpress", {
            templateUrl: "pages/Talentexpress.html"
            , controller: 'MainCtrl'
        }).when("/Engagements", {
            templateUrl: "pages/Engagements.html"
            , controller: "engagementsController"
        }).when("/Requisitions", {
            templateUrl: "pages/Requisitions.html"
            , controller: "requisitionsController"
        }).when("/Search", {
            templateUrl: "pages/Search.html"
            , controller: "searchController"
        }).when("/News", {
            templateUrl: "pages/News.html"
            , controller: "newsController"
        }).when("/Reports", {
            templateUrl: "pages/Reports.html"
            , controller: "reportsController"
        }).when("/Resources", {
            templateUrl: "pages/Resources.html"
            , controller: "resourcesController"
        })*/
        // Blog
        .when("/blog", {
            templateUrl: "partials/blog.html"
            , controller: "BlogCtrl"
        }).when("/blog/post", {
            templateUrl: "partials/blog_item.html"
            , controller: "BlogCtrl"
        })
        // else 404
        .otherwise("/404", {
            templateUrl: "partials/404.html"
            , controller: "mainController"
        });
}]);
app.controller('MainCtrl', function ($scope) {});
app.directive('bsActiveLink', ['$location', function ($location) {
    return {
        restrict: 'A', //use as attribute
        replace: false
        , link: function (scope, elem) {
            //after the route has changed
            scope.$on("$routeChangeSuccess", function () {
                var hrefs = ['/#' + $location.path()
                             , '#' + $location.path(), //html5: false
                             $location.path()]; //html5: true
                console.log(hrefs)
                angular.forEach(elem.find('a'), function (a) {
                    a = angular.element(a);
                    if (-1 !== hrefs.indexOf(a.attr('href'))) {
                        a.parent().addClass('active');
                    }
                    else {
                        a.parent().removeClass('active');
                    };
                });
            });
        }
    }
}]);