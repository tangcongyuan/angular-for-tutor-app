(function(){
  'use strict';

  angular.module('tutor-app')
    .controller('HeaderCtrl', HeaderCtrl);

  HeaderCtrl.$inject = ["$scope", "$location"];

  function HeaderCtrl($scope, $location){
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  }
})();
