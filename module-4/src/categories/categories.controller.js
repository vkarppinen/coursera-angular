(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuController', MenuController);


MenuController.$inject = ['response'];
function MenuController(response) {
  var menu = this;
  menu.categories = response.data;
  console.log(menu.categories);
};

})();
