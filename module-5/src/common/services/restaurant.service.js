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
    return $http.get(Apipath + "menu_items.json?category=" + categoryShortName)
    .then( function (response) {
      return response.data;
    })
  };
}

})();
