'use strict';

myApp.controller('tagsController', 
    function($scope, $http, $resource) {
      
      // if id does not exist on object it will be removed. So we can use this
      // for getting list of /tags and individual tags/1
      var tag = $resource('http://192.241.243.215/api/tags/:tagId', {tagId:'@Id'});

      $scope.getAllTags = function() {
        $scope.tags = tag.query();
      };

      $scope.getAllTags();

      $scope.addTag = function() {

        $scope.tag.Id = 0;
        
        // u is saved object
        tag.save($scope.tag, function(u, putResponseHeaders) {

          console.log(u);
          //console.log(putResponseHeaders);

          // Refresh List
          $scope.getAllTags();

          // Clear form
          $scope.tag.Name = '';

        });
      };

    });