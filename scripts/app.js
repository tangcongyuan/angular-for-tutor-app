(function(){
  'use strict';

  angular.module('tutor-app', ['ui.router', 'ng-token-auth'])
    .config(config);

  config.inject = ['$stateProvider', '$urlRouterProvider', '$authProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $authProvider, $locationProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home/index.html'
      })
      .state('reviews', {
        url: '/reviews',
        templateUrl: 'views/reviews/index.html',
        controller: 'ReviewsCtrl as review',
        resolve: {
          auth: function($auth, $state) {
            return $auth.validateUser()
                    .catch(function(resp){
                      $state.go('login');
                    });
          }
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login/index.html',
        controller: 'LoginCtrl as login'
      });
    $authProvider.configure({
      apiUrl: 'http://tutor-app-tangcongyuan-1.c9users.io'
    });

    $locationProvider.html5Mode(true);
  }

})();
