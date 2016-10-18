(function() {
  'use strict';

  angular
    .module('leaderboard')
    .controller('AllTimeController', AllTimeController)


  AllTimeController.$inject = ['allTimeService'];

  function AllTimeController(allTimeService) {
    var atVm = this;


    atVm.get = get;
      atVm.sorter = {
      by: ['recent', 'alltime'],
      reverse: true,
    };
    atVm.toggleSort = toggleSort;

    get();

    function get() {
      console.log('in all time controller')
      allTimeService
        .findAll()
        .then(function(data) {
          atVm.campers = data
        }, function(error) {
          atVm.campers = error
        })
    }
    
    function toggleSort(prop) {
      atVm.sorter.by = prop;
      atVm.sorter.reverse = !atVm.sorter.by;
    }
  }


})();