(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/home.view.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/categories.view.html',
      controller: 'CategoriesController as categoriesController',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          var res = MenuDataService.getAllCategories();
          return res;
        }]
      }
    }).state('categories.items', {
      url: '/items{categoryIndex}',
      templateUrl: 'src/menuapp/items.view.html',
      controller: 'ItemsController as itemsController',
      resolve: {
        items: ['MenuDataService', '$stateParams', 'categories',
          function (MenuDataService, $stateParams, categories) {
            var shortName = categories[$stateParams.categoryIndex].short_name;
            var res = MenuDataService.getItemsForCategory(shortName);
            return res;
          }]
      }
    });
}


})();
