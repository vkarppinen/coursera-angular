(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);


SignUpController.$inject = ['RestaurantService']
function SignUpController(RestaurantService) {
  var $ctrl = this;

  $ctrl.submit = function functionName() {

    // Check whether user chosen dish is found.
    var promise = RestaurantService.getMenuItem($ctrl.user.dish);

    promise.then(
      function (success) {
        // console.log(success);
        $ctrl.dishNotFound = false;
      },
      function (error) {
        // console.log(error);
        $ctrl.dishNotFound = true;
      });

    console.log("The user object can be added to mailing-list:", $ctrl.user);
  };

}

})();
