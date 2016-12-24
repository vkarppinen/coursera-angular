(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiPath', 'https://davids-restaurant.herokuapp.com/');

/** Main controller **/
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";

  menu.logData = function () {
    var found = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

    found.then( function(response) {
      var menu_items = response.data.menu_items;
      for (var i=0; i<menu_items.length; i++) {
        if (menu_items[i].name.indexOf(menu.searchTerm) !== -1) console.log(menu_items[i].name);
      }
    }).catch( function(error) {
      console.log(error);
    })
  };

}

/** Main service **/
MenuSearchService.$inject = ['$http', 'ApiPath']
function MenuSearchService($http, ApiPath) {
  var srv = this;

  var file = "menu_items.json";

  srv.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: 'GET',
      url: (ApiPath) + file
    });
    return response;
  };
}

})();
