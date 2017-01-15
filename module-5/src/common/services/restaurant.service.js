(function () {
"use strict";

angular.module('common')
.service('RestaurantService', RestaurantService);

RestaurantService.$inject = ['$http', 'ApiPath'];
function RestaurantService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + "categories.json")
    .then( function (response) {
      return response.data;
    });
  };

  service.getCategoryItems = function (categoryShortName) {
    return $http.get(ApiPath + "menu_items.json?category=" + categoryShortName)
    .then( function (response) {
      return response.data;
    })
  };

  service.getMenuItem = function (categoryShortName) {
    var promise = $http.get(ApiPath + "menu_items/" + categoryShortName + ".json");

    promise.then(
      function (success) {
        // console.log(success);
        var dishNotFound = false;
        return dishNotFound;
      },
      function (error) {
        // console.log(error);
        var dishNotFound = true;
        return dishNotFound;
      });
  };

}

})();
