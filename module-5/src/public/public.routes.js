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
  });
}

})();
