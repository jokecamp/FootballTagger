'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngResource', 'restangular']).
config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/players', {
			templateUrl: 'partials/players.html',
			controller: 'playerController'
		});
		$routeProvider.when('/tags', {
			templateUrl: 'partials/tags.html',
			controller: 'tagsController'
		});
		$routeProvider.when('/report', {
			templateUrl: 'partials/report.html',
			controller: 'reportController'
		});
		$routeProvider.otherwise({
			redirectTo: '/report'
		});
	}
])
.config(function($httpProvider) {
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
	});


myApp.config(function(RestangularProvider) {

	console.log("configuring restangulr");
	RestangularProvider.setBaseUrl('http://192.241.243.215/api');
	RestangularProvider.setRequestSuffix('.json');

});