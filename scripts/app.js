'use strict';

angular
    .module('github-test-api', [
        'ui.router', 'ngRoute', 'ui.bootstrap', 'yaru22.angular-timeago'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise(function($injector) {
            var $state = $injector.get("$state");
            $state.go("home");
        });
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })
    }])