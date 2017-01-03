angular.module('data', [])
.service('MenuDataService', MenuDataService)
.constant('ApiPath',  'https://davids-restaurant.herokuapp.com/')

MenuDataService.$inject = ['$http', 'ApiPath']
function MenuDataService($http, ApiPath) {
  var service = this;

  service.getAllCategories = function () {

  };

  service.getItemsForCategory = function functionName(categoryShortName) {

  };

}
