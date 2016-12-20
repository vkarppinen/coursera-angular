(function () {
'use strict';

angular.module('MyFirstApp', [])

.controller('CharCountController', function ($scope) {
  $scope.name = "";
  $scope.nameLength = 0;
  $scope.calcNameLength = function () {
    var nameLength = calcStringLength($scope.name);
    $scope.nameLength = nameLength;
  };

  function calcStringLength(text) {
    return text.length;
  };
});

})();
