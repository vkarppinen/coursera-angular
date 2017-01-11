(function () {
"use strict";

angular.module('common')
.component('loading', {
  template: '<img src="images/ajax-loader.gif" ng-if="$ctrl.show" />',
  controller: loadingController
});


loadingController.$inject = ['$rootScope'];
function loadingController($rootScope) {
  var $ctrl = this;
  var listener;

  $ctrl.$onInit = function () {
    $ctrl.show = false;
    listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
  };

  $ctrl.$onDestroy = function () {
    listener();
  };

  function onSpinnerActivate(event, data) {
    $ctrl.show = data.on;
  }

}

})();
