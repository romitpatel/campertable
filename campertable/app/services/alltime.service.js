(function() {
  'use strict';

   angular
    .module('leaderboard')
    .service('allTimeService',allTimeService)

  allTimeService.$inject = ['$http', '$q'];


  function allTimeService($http,$q) {
    var serve = this;
    serve.findAll = findAll;



    function findAll() {
      return $http
        .get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then(function(response) {
          return response.data;
        }, function(error) {
          return $q.reject(error);
        })
    }
  }

})();