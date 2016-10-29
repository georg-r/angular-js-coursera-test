(function () {
  'use strict';
  angular.module('NarrowItDownApp', []).
  controller('NarrowItDownController', NarrowItDownController).
  service('MenuSearchService', MenuSearchService).
  directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    return {
      templateUrl: 'foundItemsDirectiveTemplate.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      restrict: 'E'
    };
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.searchTerm = '';
    ctrl.found = [];
    ctrl.fetch = function () {
      if (ctrl.searchTerm.length == 0) {
        ctrl.found = [];
        ctrl.nothingFound = true;
      } else {
        MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function (result) {
          ctrl.found = result;
          ctrl.nothingFound = ctrl.found.length == 0;
        });
      }
    }
    ctrl.removeItem = function (index) {
      ctrl.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      return $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function (response) {
        var foundItems = response.data.menu_items.filter(function (item) {
          return item.description.toLowerCase().indexOf(searchTerm) >= 0;
        });
        return foundItems;
      });
    };
  }

})();
