(function () {
  'use strict';

  angular.module('LunchApp', [])

  .controller("LunchController", LunchController);

  LunchController.$inject = ['$scope'];
  function LunchController($scope) {
    $scope.lunch = "";
    $scope.message = "";
    $scope.custom = {}

    $scope.checkLunch = function () {
      var lunchItems = $scope.lunch.split(",");
      if ($scope.lunch == "") {
        $scope.message = "Please enter data first.";
        $scope.custom.color = "color: red;";
        $scope.custom.borderColor = "border-color: red";
      }
      else if (lunchItems.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.custom.color = "color: green;";
        $scope.custom.borderColor = "border-color: green";
      }
      else if (lunchItems.length >= 4) {
        $scope.message = "Too much!";
        $scope.custom.color = "color: green;";
        $scope.custom.borderColor = "border-color: green";
      }


    };
  }

})();
