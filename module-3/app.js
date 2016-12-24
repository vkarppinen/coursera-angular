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
    templateUrl: 'found-items.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: 'NarrowItDownController',
    controllerAs: 'menu',
    bindToController: true
  };
  return ddo;

}

/** Main controller **/
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";
  menu.foundItems = [];

  menu.getItems = function () {
    menu.foundItems = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
  };

  menu.removeItem = function(index) {
    console.log(this);
    menu.foundItems.splice(index, 1);
  }

}

/** Main service **/
MenuSearchService.$inject = ['$http', 'ApiPath']
function MenuSearchService($http, ApiPath) {
  var srv = this;

  var file = "menu_items.json";
  srv.found = [];

  srv.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: 'GET',
      url: ApiPath + file
    });

    response.then( function(response) {
      var menu_items = response.data.menu_items;
      for (var i=0; i<menu_items.length; i++) {
        if (menu_items[i].name.indexOf(searchTerm) !== -1) {
          srv.found.push(menu_items[i]);
        }
      }
    }).catch( function(error) {
      console.log(error.data);
    });
    return srv.found;
  };
}

})();
