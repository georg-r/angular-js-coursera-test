(function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
         .controller('ToBuyController', ToBuyController)
         .controller('AlreadyBoughtController', AlreadyBoughtController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var controller = this;
  controller.nothingToBuyLeft = function () {
    return ShoppingListCheckOffService.toBuyItems.length == 0;
  };
  controller.getToBuyItems = function () {
      return ShoppingListCheckOffService.toBuyItems;
  };
  controller.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var controller = this;
  controller.noItemsBought = function () {
      return ShoppingListCheckOffService.boughtItems.length == 0;
  };
  controller.getBoughtItems = function () {
      return ShoppingListCheckOffService.boughtItems;
  };
}

function ShoppingListCheckOffService() {
  var service = this;
  service.toBuyItems = [
    {name: "cookies", quantity: 10},
    {name: "chips", quantity: 5},
    {name: "chocolate bars", quantity: 2},
    {name: "sandwiches", quantity: 3},
    {name: "pizzas", quantity: 4}
  ];
  service.boughtItems = [];
  service.buyItem = function (itemIndex) {
    var boughtItem = service.toBuyItems.splice(itemIndex, 1)[0];
    service.boughtItems.push(boughtItem);
  };
}

})();
