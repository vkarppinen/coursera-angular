(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuController', MenuController);


MenuController.$inject = ['$rootScope', 'MenuDataService'];
function MenuController($rootScope, MenuDataService) {
  var menu = this;
  menu.categories = [];


  menu.$onInit = function () {

    $rootScope.$broadcast('menu:processing', {loaderOn: true});

    // 1500 millisec timeout to demonstrate the async call.
    setTimeout(function(){
      var response = MenuDataService.getAllCategories();
      response.then( function () {
        // Catch the menu categories
        var categories = response.$$state.value.data;
        menu.categories = categories;
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        $rootScope.$broadcast('menu:processing', {loaderOn: false});
      });
    }, 1500);

  };
}

})();
