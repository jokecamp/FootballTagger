'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('PlayerCtrl', ['$scope', function($scope) {

  	$scope.players = [
    	{firstname:'Ryan', lastname:"Giggs"},
    	{firstname:'Joe', lastname:"Kampschmidt"},
    	{firstname:'Wayne', lastname:"Rooney"},
    ];

	$scope.addPlayer = function() {
	    $scope.players.push({firstname:$scope.firstnameText, lastname:$scope.lastnameText});
	    $scope.firstnameText = '';
	    $scope.lastnameText = '';
	  };

  }]);