'use strict';

myApp.controller('tagsController', 
    function($scope, tagService) {
      

      $scope.getTags = function() {

          tagService.getAllTags().then(function(data) { 
              console.log("getting all tags");
              $scope.tags = data;
          });

      };

      $scope.addTag = function() {

        console.log("adding new tag");
        var t = $scope.tag;
        tagService.addTag(t).then($scope.getTags);
      };


      $scope.getTags();
    });