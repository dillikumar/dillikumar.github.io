(function () {
    "use strict";
    angular.module('dillikumar.github.io', ['ngRoute','ngAnimate']).
    config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
        
        $routeProvider.
            when('/', {
            templateUrl: '/views/home.html',
            controller: 'homeCtrl'
            }).
            when('/about', {
            templateUrl: '/views/about.html',
            controller: 'aboutCtrl'
            }).
            otherwise({ redirectTo: '/' })
        }]);

}());
