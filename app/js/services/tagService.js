'use strict';

myApp.factory('tagService', function($resource, $q, Restangular) {      

	var baseTags = Restangular.all('tags');

      return {
			getAllTags : function() {
				return baseTags.getList();
			},

			addTag : function(tag) {
				
				// Zero will ignored so the route is resolved to '/tags'
				var newTag = Restangular.one("tags", 0);
				console.log(tag);
				// add the "0" so we post to /tags/0 for this API
				return newTag.post("0", tag);
      		}
	}
});