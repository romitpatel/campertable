// Code goes here

(function() {
  'use strict';


  angular
  .module('leaderboard', ['ngRoute'])
  .config(modConfig)
  
  
  function modConfig($routeProvider){
    
    
    $routeProvider
      .when('/recent',{
        templateUrl:'views/recent100.tmpl.html',
        controller:'RecentController',
        controllerAs:'recentVm'
      })
      .when('/alltime',{
        templateUrl:'views/alltime100.tmpl.html',
        controller:'AllTimeController',
        controllerAs:'atVm'
      })
      .otherwise({
        redirectTo : '/recent'
      })
  }



})();