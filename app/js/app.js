'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/players', {templateUrl: 'partials/players.html', controller: 'PlayerCtrl'});
    $routeProvider.when('/tags', {templateUrl: 'partials/tags.html', controller: 'TagsCtrl'});
    $routeProvider.when('/report', {templateUrl: 'partials/report.html', controller: 'ReportCtrl'});
    $routeProvider.otherwise({redirectTo: '/report'});
  }])
  .config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});


