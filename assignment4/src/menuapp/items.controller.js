(function () {
  'use strict';
  angular.module('MenuApp').controller('ItemsController', ItemsController);

  ItemsController.$inject = ['categories', 'items'];
  function ItemsController(categories, items) {
    var itemsController = this;
    itemsController.categories = categories;
    itemsController.items = items;
  }
})
();
