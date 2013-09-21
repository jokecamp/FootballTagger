'use strict';

myApp.controller('playerController', ['$scope', '$http',
    function($scope, $http) {

      $http.get('http://192.241.243.215/api/players.json').success(function(data) {
        $scope.players = data;
      });

      $scope.newPlayer = function() {
        $scope.saveMode = "Add New";
        $scope.player = { "Id":0 };
      };

      $scope.loadPlayer = function (data) {
        $scope.saveMode = "Save";
        //console.log("load player " + data.Id);
        $scope.player = data;
      };

      $scope.savePlayer = function() {

        console.log($scope.player);
        $scope.player.Displayname = $scope.player.Firstname + " " + $scope.player.Lastname;

        if ($scope.player.Id > 0) {
          console.log("need to implement save");
        }
        else {
          $http.post('http://192.241.243.215/api/players/0', $scope.player).success(function(data) {

            $http.get('http://192.241.243.215/api/players.json').success(function(data) {
              $scope.players = data;
            });
          });
        }

        $scope.newPlayer();
      };


      // default settings
      $scope.newPlayer();
    }
  ]);