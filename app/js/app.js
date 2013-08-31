'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/players', {templateUrl: 'partials/players.html', controller: 'PlayerCtrl'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }])
  .config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // accept, origin, x-requested-with
    // accept, origin, content-type
});


