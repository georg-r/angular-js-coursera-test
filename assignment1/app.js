(function() {
  angular.module('LunchCheckerApp', []).
  controller("LCController", LCController);
  LCController.$inject = ['$scope'];

  function LCController($scope) {
    $scope.isOk = false;
    $scope.isTooMuch = false;
    $scope.isNoData = false;
    $scope.dishes = "";
    $scope.checkFood = function () {
      var dishes = $scope.dishes;
      if (dishes.length == 0) {
        $scope.isOk = false;
        $scope.isTooMuch = false;
        $scope.isNoData = true;
      } else {
        var dishesSplit = dishes.split(",");
        var dishesCount = 0;
        for (var i = 0; i<dishesSplit.length; ++i) {
          if (dishesSplit[i].trim().length > 0) {
            ++dishesCount;
          }
        }
        $scope.isNoData = false;
        if (dishesCount <= 3) {
          $scope.isOk = true;
          $scope.isTooMuch = false;
        } else {
          $scope.isOk = false;
          $scope.isTooMuch = true;
        }
      }
    }
  }
})
()
