'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('ReportCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('http://192.241.243.215/api/report.json').success(function (data) {
            console.log(data);            
            $scope.report = data;
    });

    $scope.addTagToPlayer = function() {

        // {"Id":0,"PlayerId":0,"TagId":0,"Count":0}
        $http.post('http://192.241.243.215/api/tags/0', { Name:$scope.nameText })
            .success(function(data) {
                console.log(data);

                  $http.post('http://192.241.243.215/api/playertags/0', { PlayerId:$scope.playerIdText, TagId:data.Id });

            });
    };

  }])
  .controller('PlayerCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('http://192.241.243.215/api/players.json').success(function (data) {
            $scope.players = data;
        });

	$scope.addPlayer = function() {

      $http.post('http://192.241.243.215/api/players/0', { Firstname:$scope.Firstname, Lastname:$scope.lastnameText }).success(function(data) {

        $http.get('http://192.241.243.215/api/players.json').success(function (data) {
            $scope.players = data;
        });    
      });

	    $scope.firstnameText = '';
	    $scope.lastnameText = '';
	  };

  }])
  .controller('TagsCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('http://192.241.243.215/api/tags.json').success(function (data) {
            $scope.tags = data;
        });

  $scope.addTag = function() {

      $http.post('http://192.241.243.215/api/tags/0', { Name:$scope.nameText }).success(function(data) {

        $http.get('http://192.241.243.215/api/tags.json').success(function (data) {
                $scope.tags = data;
            }); 
      });

      $scope.firstnameText = '';
      $scope.lastnameText = '';
    };

  }]);