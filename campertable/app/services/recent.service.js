(function() {
  'use strict';

  angular
    .module('leaderboard')
    .service('recentService', recentService)


  recentService.$inject = ['$http', '$q'];

  function recentService($http, $q) {
    var self = this;
    self.findAll = findAll;


    function findAll() {
      return $http
        .get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(function(response) {
          return response.data;
        }, function(error) {
          return $q.reject(error);
        });

    }

  }
})();