(function () {
  'use strict';
  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'src/menuapp/categories.component.template.html',
      bindings: {categories: '<'},
      restrict: 'E'
    });
})();
