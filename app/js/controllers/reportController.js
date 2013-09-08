'use strict';

myApp.controller('reportController', ['$scope', '$http',
  function($scope, $http) {

    $http.get('http://192.241.243.215/api/report.json').success(function(data) {
      console.log(data);
      $scope.report = data;
    });

    $scope.addTagToPlayer = function() {

      // {"Id":0,"PlayerId":0,"TagId":0,"Count":0}
      $http.post('http://192.241.243.215/api/tags/0', {
        Name: $scope.nameText
      })
        .success(function(data) {
          console.log(data);

          $http.post('http://192.241.243.215/api/playertags/0', {
            PlayerId: $scope.playerIdText,
            TagId: data.Id
          }).success(function(data) {
              console.log('load new data');
          });

        });
    };

  }
]);