(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiPath', 'https://davids-restaurant.herokuapp.com/');


/** foundItemsDirective **/
function FoundItemsDirective() {
  var ddo = {
    restrict:'AE',
    templateUrl: 'found-items.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: 'NarrowItDownController as menu',
    bindToController: true
  };
  return ddo;

}

/** Main controller **/
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.searchTerm = "";
  menu.items = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

  menu.updateItems = function () {
    menu.items = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
  };

  menu.removeItem = function(index) {
    menu.items = MenuSearchService.removeItem(index);
  };

  menu.isEmpty = function () {
    if (menu.items.length === 0) return true;
    else return false;
  };
}

/** Main service **/
MenuSearchService.$inject = ['$http', 'ApiPath']
function MenuSearchService($http, ApiPath) {
  var srv = this;

  var file = "menu_items.json";
  srv.found = [];

  // Get items
  srv.getMatchedMenuItems = function (searchTerm) {
    srv.found.splice(0, srv.found.length);
    var response = $http({
      method: 'GET',
      url: ApiPath + file
    });

    response.then( function(response) {
      var menu_items = response.data.menu_items;
      for (var i=0; i<menu_items.length; i++) {
        // ignore case sensitiveness
        var menu_item = menu_items[i].name.toLowerCase();
        searchTerm = searchTerm.toLowerCase();
        if (menu_item.indexOf(searchTerm) !== -1) {
          srv.found.push(menu_items[i]);
        }
      }
    }).catch( function(error) {
      console.log(error);
    });
    return srv.found;
  };

  // Remove item
  srv.removeItem = function (index) {
    srv.found.splice(index,1);
    return srv.found;
  };
}

})();
