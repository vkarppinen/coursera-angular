(function () {
"use strict";

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var toBuy = this;

  toBuy.name = "";
  toBuy.quantity = "";

  toBuy.addItem = function() {
    ShoppingListService.addItem(toBuy.name, toBuy.quantity);
    toBuy.items = ShoppingListService.getToBuyItems();
  };

  toBuy.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };

  toBuy.markAsBought = function(itemIndex) {
    ShoppingListService.markAsBought(itemIndex);
  }

};

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var bought = this;
  bought.items = ShoppingListService.getBoughtItems();
};

function ShoppingListService() {
  var service = this;

  var itemsToBuy = [];
  var itemsBought = [];

  service.addItem = function(itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsToBuy.push(item);
  };

  service.removeItem = function(itemIndex) {
    itemsToBuy.splice(itemIndex, 1);
  };

  service.markAsBought = function(itemIndex) {
    var item = itemsToBuy[itemIndex];
    itemsBought.push(item);
    itemsToBuy.splice(itemIndex, 1);
  }

  service.getToBuyItems = function() {
    return itemsToBuy;
  }

  service.getBoughtItems = function() {
    return itemsBought;
  }
}

})();
