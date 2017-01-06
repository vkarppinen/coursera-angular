angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiPath',  'https://davids-restaurant.herokuapp.com/')

MenuDataService.$inject = ['$http', 'ApiPath']
function MenuDataService($http, ApiPath) {
  var service = this;

  service.categories = [];
  service.categoryItems = [];

  // Returns a resposones object from https://davids-restaurant.herokuapp.com/categories.json
  service.getAllCategories = function () {
    var response = $http({
      method: 'GET',
      url: ApiPath + 'categories.json'
    });
    return response;
  };

  /* Return all menu items with specific category shortname
     from  https://davids-restaurant.herokuapp.com/menu_items.json?category= */
  service.getItemsForCategory = function(categoryShortName) {
    var response = $http({
      method: 'GET',
      url: ApiPath + "menu_items.json?category=" + categoryShortName
    });
    return response;
  };

}
