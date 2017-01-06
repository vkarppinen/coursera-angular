(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {

  // Remove hasbang from url.
  // Also need to put "<base href="/""> to main template
  // $locationProvider.html5Mode(true);

  // Redirect to home if no url matches.
  $urlRouterProvider.otherwise('/');

  // Configure UI views
  $stateProvider

  // Menu Categories
  .state('home', {
    url:'/',
    templateUrl:'src/templates/home.html'
  })

  // Category items
  .state('categories', {
    url:'/categories',
    templateUrl:'src/templates/categories.html',
    controller: 'MenuController as menu',
    resolve: {
      response: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('category', {
    url:'/categories/{categoryShortName}',
    templateUrl: 'src/templates/category.html',
    controller: 'CategoryItemsController as category',
    resolve: {
      response: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });
};

})();
