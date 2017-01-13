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

  // Home state
  .state('public.home', {
    url: "/",
    templateUrl: "src/public/home/home.html"
  })

  // Menu categories state
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
  })

  // Menu category items state
  .state('public.items',{
    url: "/menu/{category}",
    templateUrl: "src/public/category-items/category-items.html",
    controller: 'ItemsController',
    controllerAs: 'ItemsCtrl',
    resolve: {
        categoryItems: ['$stateParams','RestaurantService', function ($stateParams, RestaurantService) {
          return RestaurantService.getCategoryItems($stateParams.category);
        }]
      }
  })

  // Signup state
  .state('public.signup', {
    url: "/signup",
    templateUrl: "src/public/signup/signup.html"
  });


}

})();
