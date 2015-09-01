/**
 * Created by xianyh on 2015-8-27.
 */

angular.module('ionicApp', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "templates/home.html",
                        controller: 'HomeTabCtrl'
                    }
                }
            })
            .state('tabs.facts', {
                url: "/facts",
                views: {
                    'home-tab': {
                        templateUrl: "templates/facts.html"
                    }
                }
            })
            .state('tabs.facts2', {
                url: "/facts2",
                views: {
                    'home-tab': {
                        templateUrl: "templates/facts2.html"
                    }
                }
            })
            .state('tabs.about', {
                url: "/about",
                views: {
                    'about-tab': {
                        templateUrl: "templates/about.html"
                    }
                }
            })
            .state('tabs.navstack', {
                url: "/navstack",
                views: {
                    'about-tab': {
                        templateUrl: "templates/nav-stack.html"
                    }
                }
            })
            .state('tabs.contact', {
                url: "/contact",
                views: {
                    'contact-tab': {
                        templateUrl: "templates/contact.html"
                    }
                }
            });


        $urlRouterProvider.otherwise("/tab/home");

    })

    .controller('HomeTabCtrl', function($scope) {
        $scope.active_content = 'orders';
        $scope.setActiveContent = function(active_content){
            $scope.active_content = active_content;
        }
    });
