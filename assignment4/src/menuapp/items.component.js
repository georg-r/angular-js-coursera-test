(function () {
  'use strict';
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menuapp/items.component.template.html',
    bindings: {items: '<'}
  });
})()
