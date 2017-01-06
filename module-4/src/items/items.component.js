(function () {
'use strict';

angular.module('MenuApp')
.component('categoryItems', {
  templateUrl: 'src/items/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
