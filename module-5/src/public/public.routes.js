(function () {
"use strict";

angular.module('public')
.config(routeCongfig);

routeCongfig.$inject = ['$stateProvider']
function routeCongfig($stateProvider) {

  $stateProvider

  // Public
  .state('public', {
    abstract: true,
    templateUrl: 'src/public/public.html'
  })
  .state('public.home', {
    url: "/",
    templateUrl: "src/public/home/home.html"
  })
  .state('public.menu', {
    url: "/menu",
    templateUrl: "src/public/menu/menu.html",
    controller: 'MenuController',
    controllerAs: 'menuCtrl',
    resolve: {
      categories: ['RestaurantService', function (RestaurantService) {
        return RestaurantService.getCategories();
      }]
    }
  });

}

})();
