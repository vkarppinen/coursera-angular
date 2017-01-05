(function () {
'use strict';

angular.module('MenuApp')
.component('loader', {
  templateUrl: 'src/loader/loader.template.html',
  controller: LoaderController
});


LoaderController.$inject = ['$rootScope'];
function LoaderController($rootScope) {
  var $ctrl = this;
  $ctrl.showLoader = true;

  var cancelListener = $rootScope.$on('menu:processing', function (event, data) {
    console.log('Event is: ', event);
    console.log("Data is: ", data);

    if (data.loaderOn) {
      $ctrl.showLoader = true;
    } else {
      $ctrl.showLoader = false;
    }
  });

  $rootScope.$onDestroy = function () {
    cancelListener();
  };
  
};

})();
