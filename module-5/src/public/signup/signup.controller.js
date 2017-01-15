(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);


SignUpController.$inject = ['RestaurantService']
function SignUpController(RestaurantService) {
  var $ctrl = this;
  $ctrl.user = {};

  $ctrl.submit = function functionName() {

    // Check whether user chosen dish is found.
    $ctrl.dishNotFound = RestaurantService.getMenuItem($ctrl.user.dish);

    if ($ctrl.dishNotFound) {
      // return some error.
      return "Error, the dish is not found.";
    }
    else {
      return "Oh yeah! That is a good meal.";
      // $ctrl.addUserToMailingList();
    }

  };

}

})();
