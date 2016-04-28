'use strict';

var mapperApp = angular.module('mapperApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: "templates/Home.html"
        });
        $routeProvider.when('/records/:acct', {
            templateUrl: '/templates/shareList.html',
            controller: 'Share'
        });
        $routeProvider.when('/history/:acct/:id', {
           templateUrl: '/templates/history.html',
           controller: 'history' 
        });
        $routeProvider.when('/mapTest', {
            templateUrl: '/mapTest.html'
        });
        $routeProvider.otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    });