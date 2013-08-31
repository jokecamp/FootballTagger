'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('PlayerCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('http://192.241.243.215/api/players.json').success(function (data) {
            $scope.players = data;
        });

	$scope.addPlayer = function() {

      $http.post('http://192.241.243.215/api/players/0', { Firstname:$scope.firstnameText, Lastname:$scope.lastnameText }).success(function(data) {

        $http.get('http://192.241.243.215/api/players.json').success(function (data) {
            $scope.players = data;
        });    

      });

	    $scope.firstnameText = '';
	    $scope.lastnameText = '';

  
	  };

  }]);