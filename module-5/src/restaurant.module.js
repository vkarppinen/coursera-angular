(function () {
"use strict";

angular.module('restaurant', ['public'])
.config(config);


config.$inject = ['$urlRouterProvider']
function config($urlRouterProvider) {

  // Redirect to root, if entered path does not exist.
  $urlRouterProvider.otherwise("/");
}

})();
