(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);

CategoryItemsController.$inject = ['response'];
function CategoryItemsController(response) {
  var $ctrl = this;
  $ctrl.items = response.data.menu_items;
  console.log($ctrl.items);
};

})();
