(function () {
"use strict";

angular.module('public')
.component('categoryItem', {
  templateUrl: "src/public/category-item/category-item.html",
  bindings: {
    category: "<",
    item: "<"
  }
});

})();
