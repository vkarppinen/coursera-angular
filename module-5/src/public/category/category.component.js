(function () {
"use strict";

angular.module('public')
.component('category', {
  templateUrl: "src/public/category/category.html",
  bindings: {
    category: "<"
  }
});
})();
