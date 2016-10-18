(function() {
  'use strict';


  angular
    .module('leaderboard')
    .controller('RecentController', RecentController)


  RecentController.$inject = ['recentService']

  function RecentController(recentService) {
    var recentVm = this;

    
    recentVm.get = get;
    recentVm.sorter = {
      by: ['recent', 'alltime'],
      reverse: true,
    };
    recentVm.toggleSort = toggleSort;

    get();

    function get() {
      console.log('in recent controller')
      recentService
        .findAll()
        .then(function(data) {
          recentVm.campers = data;
        }, function(error) {
          console.log(error)
        })
    }

    function toggleSort(prop) {
      recentVm.sorter.by = prop;
      recentVm.sorter.reverse = !recentVm.sorter.by;
    }
  }

})();