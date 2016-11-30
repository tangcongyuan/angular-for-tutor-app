(function(){
  'use strict';

  angular.module('angular-app')
    .controller('HeaderCtrl', HeaderCtrl);

  HeaderCtrl.$inject = ["$location"];

  function HeaderCtrl($location){
    var vm = this;
    vm.isActive = function (viewLocation) {
      console.log($location.path());
      return viewLocation === $location.path();
    };
  }
})();
