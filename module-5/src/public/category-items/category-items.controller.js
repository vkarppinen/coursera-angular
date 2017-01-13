(function () {
"use strict";

angular.module('public').
controller('ItemsController', ItemsController);

ItemsController.$inject = ['categoryItems'];
function ItemsController(categoryItems) {
  var $ctrl = this;
  $ctrl.category = categoryItems.category;
  $ctrl.items = categoryItems.menu_items;
}

})();
