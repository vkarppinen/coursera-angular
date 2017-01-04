(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuController', MenuController);


MenuController.$inject = ['MenuDataService'];
function MenuController(MenuDataService) {
  var menu = this;
  menu.categories = [];

  menu.$onInit = function () {
    var response = MenuDataService.getAllCategories();

    response.then( function () {
      // Catch the menu categories
      var categories = response.$$state.value.data;
      menu.categories = categories
    })
    .catch(function (error) {
      console.log(error);
    })
  };

}

})();
