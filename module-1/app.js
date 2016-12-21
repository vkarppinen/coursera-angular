(function () {
  'use strict';

  angular.module('LunchApp', [])

  .controller("LunchController", LunchController);

  LunchController.$inject = ['$scope'];
  function LunchController($scope) {
    $scope.lunch = "";
    $scope.message = "";
    $scope.fontColor = "";

    $scope.checkLunch = function () {
      var lunchItems = $scope.lunch.split(",");
      if ($scope.lunch == "") {
        $scope.message = "Please enter data first.";
        $scope.fontColor = "text-danger";
      }
      else if (lunchItems.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.fontColor = "text-success";
      }
      else if (lunchItems.length >= 4) {
        $scope.message = "Too much!";
        $scope.fontColor = "text-success";
      }


    };
  }

})();
