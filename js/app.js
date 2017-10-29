var nbApp = angular.module('nbApp', ['ui.router']);

nbApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            views: {
                '': { templateUrl: '../views/home.html' },
            }
        })

});
