(function () {
"use strict";

angular.module('public')
.controller('MenuController', MenuController);

MenuController.$inject = ['categories'];
function MenuController(categories) {
  var $ctrl = this;
  $ctrl.categories = categories;
}

})();
